const path = require("path");
const XLSX = require("xlsx");
const fs = require("fs");
const { filterData } = require("../src/services/filterData");
const { downloadExcel } = require("../src/services/downloadExcel");

describe("downloadExcel", () => {
  test("download Excel file successfully", async () => {
    const url =
      "https://fragilestatesindex.org/wp-content/uploads/2023/06/FSI-2023-DOWNLOAD.xlsx";
    const outputPath = path.join(__dirname, "/testFile/original.xlsx");
    await downloadExcel(url, outputPath);

    expect(fs.existsSync(outputPath)).toBe(true);
  });
});

describe("filterData", () => {
  test("normal", () => {
    const filePath = path.join(__dirname, "/testFile/2023.xlsx");
    const workbook = XLSX.readFile(filePath);

    const filteredData = filterData(workbook);

    expect(filteredData[0]).toEqual(
      expect.objectContaining({
        Country: "Nepal",
        Year: 2023,
        Rank: "55th",
      })
    );
  });
});
