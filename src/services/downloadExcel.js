const axios = require("axios");
const fs = require("fs");
const path = require("path");

/**
 * Downloads an Excel file from a remote URL and saves it to the local filesystem.
 *
 * @param {string} url - The remote URL of the Excel file to download
 * @param {string} outputPath - Local filesystem path to save the downloaded file
 * @returns {Promise<string>} Resolves with the output path upon successful download
 * @throws {Error} If the download fails or file cannot be saved
 */
const downloadExcel = async (url, outputPath) => {
  try {
    // Download file as binary buffer
    const response = await axios({ url, responseType: "arraybuffer" });

    // Ensure output directory exists
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });

    // Write downloaded data to file
    fs.writeFileSync(outputPath, response.data);

    console.log("Download successful:", outputPath);
    return outputPath;
  } catch (error) {
    console.error("Download failed:", error.message);
    throw error;
  }
};

module.exports = { downloadExcel };
