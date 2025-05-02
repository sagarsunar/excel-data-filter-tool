const XLSX = require("xlsx");

/**
 * Exports filtered data to a new Excel file
 * @param {Array<Object>} filteredData - The filtered dataset to export (array of objects)
 * @param {string} outputPath - Destination file path for the Excel output (e.g., './output/filtered_data.xlsx')
 * @returns {void}
 *
 * @example
 * const filteredData = [{ Country: 'Nepal', Value: 100 }, ...];
 * exportFilteredData(filteredData, './exports/nepal_data.xlsx');
 *
 * @description
 * This function:
 * 1. Creates a new Excel workbook
 * 2. Converts the filtered data to a worksheet
 * 3. Appends the worksheet to the workbook
 * 4. Writes the workbook to the specified file path
 * 5. Logs the output path on success
 */

const exportFilteredData = (filteredData, outputPath) => {
  const newWorkbook = XLSX.utils.book_new();
  const newWorksheet = XLSX.utils.json_to_sheet(filteredData);
  XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, "FilteredData");
  XLSX.writeFile(newWorkbook, outputPath);
  console.log("Exported filtered data to:", outputPath);
};

module.exports = { exportFilteredData };
