const { BlobServiceClient } = require("@azure/storage-blob");
const azureStorageConnectionString =
  "BlobEndpoint=https://chirpstorage.blob.core.windows.net/;QueueEndpoint=https://chirpstorage.queue.core.windows.net/;FileEndpoint=https://chirpstorage.file.core.windows.net/;TableEndpoint=https://chirpstorage.table.core.windows.net/;SharedAccessSignature=sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupyx&se=2025-05-01T15:13:12Z&st=2023-12-28T07:13:12Z&spr=https&sig=os5ipdQYxp3MezorBU1b56sEEL7m9fZyo9HSWxlu%2BF8%3D";
const containerName1 = "notification";
const containerName2 = "images";
const azureBlobClient = BlobServiceClient.fromConnectionString(
  azureStorageConnectionString
);

async function approveAddBird(req, res, next) {
  const { birdKey, imgFormat } = req.body;
  azureBlobClient.getContainerClient(containerName1);
  const notificationContainer =
    azureBlobClient.getContainerClient(containerName1);
  const imagesContainer = azureBlobClient.getContainerClient(containerName2);
  try {
    const source = notificationContainer.getBlobClient(
      `${birdKey}.${imgFormat}`
    );
    const destination = imagesContainer.getBlobClient(
      `${birdKey}.${imgFormat}`
    );
    await destination.beginCopyFromURL(source.url);
    await source.delete();
    req.body.imageSrc = `https://chirpstorage.blob.core.windows.net/images/${`${req.body.birdKey}.${req.body.imgFormat}`}`;
    next();
  } catch (error) {
    res.status(500).json({ error: "oops something went wrong!" });
  }
}

module.exports = approveAddBird;
