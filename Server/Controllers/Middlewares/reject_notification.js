const { BlobServiceClient } = require("@azure/storage-blob");
const azureStorageConnectionString =
  "BlobEndpoint=https://chirpstorage.blob.core.windows.net/;QueueEndpoint=https://chirpstorage.queue.core.windows.net/;FileEndpoint=https://chirpstorage.file.core.windows.net/;TableEndpoint=https://chirpstorage.table.core.windows.net/;SharedAccessSignature=sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupyx&se=2025-05-01T15:13:12Z&st=2023-12-28T07:13:12Z&spr=https&sig=os5ipdQYxp3MezorBU1b56sEEL7m9fZyo9HSWxlu%2BF8%3D";
const containerName = "notification";
const azureBlobClient = BlobServiceClient.fromConnectionString(
  azureStorageConnectionString
);

async function rejectNotification(req, res, next) {
  const { isEdited, isImgEdited, birdKey, imgFormat } = req.body;
  if (!isEdited || !isImgEdited) {
    next();
    return;
  }
  const containerClient = azureBlobClient.getContainerClient(containerName);
  const blob = containerClient.getBlobClient(`${birdKey}.${imgFormat}`);
  try {
    await blob.delete();
    next();
  } catch (error) {
    res.status(500).json({ error: "oops something went wrong!" });
  }
}

module.exports = rejectNotification;
