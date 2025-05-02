const XLSX = require("xlsx");

/**
 * Filters Excel worksheet data to only include rows where Country equals 'Nepal'
 * @param {object} workbook - The XLSX workbook object containing the data
 * @param {string[]} workbook.SheetNames - Array of sheet names in the workbook
 * @param {object} workbook.Sheets - Object containing worksheet data
 * @returns {object[]} Array of filtered row objects where Country is 'Nepal'
 *
 * @example
 * const workbook = XLSX.readFile('data.xlsx');
 * const nepalData = filterData(workbook);
 * console.log(nepalData); // Outputs: [{ Country: 'Nepal', ... }, ...]
 */
const filterData = (workbook) => {
  // Get first worksheet from workbook
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  // Convert worksheet to JSON array
  const data = XLSX.utils.sheet_to_json(worksheet);

  // Filter rows where Country equals 'Nepal'
  return data.filter((row) => row.Country === "Nepal");
};
module.exports = { filterData };
