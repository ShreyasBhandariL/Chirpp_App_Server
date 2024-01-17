const { BlobServiceClient } = require("@azure/storage-blob");
const azureStorageConnectionString =
  "BlobEndpoint=https://chirpstorage.blob.core.windows.net/;QueueEndpoint=https://chirpstorage.queue.core.windows.net/;FileEndpoint=https://chirpstorage.file.core.windows.net/;TableEndpoint=https://chirpstorage.table.core.windows.net/;SharedAccessSignature=sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupyx&se=2025-05-01T15:13:12Z&st=2023-12-28T07:13:12Z&spr=https&sig=os5ipdQYxp3MezorBU1b56sEEL7m9fZyo9HSWxlu%2BF8%3D";
const containerName = "images";
const azureBlobClient = BlobServiceClient.fromConnectionString(
  azureStorageConnectionString
);
const azureContainer = azureBlobClient.getContainerClient(containerName);
async function addBirdMiddleware(req, res, next) {
  const { birdKey, pastImgFormat, imgFormat } = req.body;
  if (!req.file) {
    next();
    return;
  }
  let blobClient = azureContainer.getBlockBlobClient(
    birdKey + "." + pastImgFormat
  );
  try {
    await blobClient.delete();
    blobClient = azureContainer.getBlockBlobClient(birdKey + "." + imgFormat);

    await blobClient.upload(req.file.buffer, req.file.buffer.length, {
      blobHTTPHeaders: { blobContentType: req.file.mimetype },
    });
    req.body.imageSrc = `https://chirpstorage.blob.core.windows.net/images/${`${birdKey}.${imgFormat}`}`;
    next();
  } catch (error) {
    res.status(500).json({ error: "oops something went wrong!" });
    return;
  }
}

module.exports = addBirdMiddleware;
