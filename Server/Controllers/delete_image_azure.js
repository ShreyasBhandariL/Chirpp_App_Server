const { BlobServiceClient } = require("@azure/storage-blob");

// Replace the following values with your Azure Storage Account and SAS key information
const accountName = "chirpstorage";
const containerName = "notification";
const sasKey =
  "?sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupyx&se=2025-05-01T15:13:12Z&st=2023-12-28T07:13:12Z&spr=https&sig=os5ipdQYxp3MezorBU1b56sEEL7m9fZyo9HSWxlu%2BF8%3D";

// Create a BlobServiceClient object using the provided SAS key
const blobServiceClient = new BlobServiceClient(
  `https://${accountName}.blob.core.windows.net${sasKey}`
);

// Get a reference to a container
const containerClient = blobServiceClient.getContainerClient(containerName);

async function listImages() {
  try {
    const blob = containerClient.getBlobClient(
      "202312291703863907077117157.jpeg"
    );
    await blob.delete();
    console.log("blob deleted successfully");
  } catch (error) {
    console.error("Error listing blobs:", error.message);
  }
}

// Call the function to list images
listImages();
