const { BlobServiceClient } = require("@azure/storage-blob");
const azureStorageConnectionString =
  "BlobEndpoint=https://chirpstorage.blob.core.windows.net/;QueueEndpoint=https://chirpstorage.queue.core.windows.net/;FileEndpoint=https://chirpstorage.file.core.windows.net/;TableEndpoint=https://chirpstorage.table.core.windows.net/;SharedAccessSignature=sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupyx&se=2025-05-01T15:13:12Z&st=2023-12-28T07:13:12Z&spr=https&sig=os5ipdQYxp3MezorBU1b56sEEL7m9fZyo9HSWxlu%2BF8%3D";
const containerName1 = "notification";
const containerName2 = "images";
const azureBlobClient = BlobServiceClient.fromConnectionString(
  azureStorageConnectionString
);

async function approveEditBird(req, res, next) {
  try {
    const { birdKey, isImgEdited, pastImgFormat, imgFormat } = req.body;
    if (!isImgEdited) {
      next();
      return;
    }
    const sourceContainer = azureBlobClient.getContainerClient(containerName1);
    const destinationContainer =
      azureBlobClient.getContainerClient(containerName2);
    const sourceBlob = sourceContainer.getBlobClient(`${birdKey}.${imgFormat}`);
    let destinationBlob = destinationContainer.getBlobClient(
      `${birdKey}.${pastImgFormat}`
    );
    await destinationBlob.delete();
    destinationBlob = destinationContainer.getBlobClient(
      `${birdKey}.${imgFormat}`
    );
    await destinationBlob.beginCopyFromURL(sourceBlob.url);
    await sourceBlob.delete();
    req.body.imageSrc = `https://chirpstorage.blob.core.windows.net/images/${`${birdKey}.${imgFormat}`}`;
    next();
  } catch (error) {
    res.status(500).json({ error: "oops something went wrong!" });
  }
}

module.exports = approveEditBird;
