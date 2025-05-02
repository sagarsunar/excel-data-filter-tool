const path = require("path");
const XLSX = require("xlsx");
const { downloadExcel } = require("./services/downloadExcel");
const { filterData } = require("./services/filterData");
const { exportFilteredData } = require("./services/exportFilteredData");

(async () => {
  try {
    // excil data : https://fragilestatesindex.org/excel/
    const excelUrl =
      "https://fragilestatesindex.org/wp-content/uploads/2023/06/FSI-2023-DOWNLOAD.xlsx";

    const downloadedPath = path.join(__dirname, "../downloads/original.xlsx");
    const filteredPath = path.join(__dirname, "../downloads/filtered.xlsx");

    // Step 1: Download file
    const filePath = await downloadExcel(excelUrl, downloadedPath);

    // Step 2: Read & Filter
    const workbook = XLSX.readFile(filePath);
    const filteredData = filterData(workbook);

    // Step 3: Export
    exportFilteredData(filteredData, filteredPath);
  } catch (error) {
    console.error("Process failed:", error);
  }
})();
