# Excel Data Filter Tool

This Node.js tool allows you to:

1. **Download an Excel file** from any public URL
2. **Save it locally** to your machine
3. **Filter the data** based on your own criteria (e.g., rows where `Country === "Nepal"`)
4. **Export the filtered results** to a new Excel file

---

## Features

- Downloads Excel files directly from a provided URL
- Parses Excel content using the `xlsx` library
- Filters specific data based on customizable logic
- Outputs a clean, filtered Excel file

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the script

```bash
node index.js
```

## Use Cases

- **Data analysis**: Download global reports or survey results, and extract only rows related to a specific country like "Nepal".
- **Custom reporting**: Automatically filter large datasets from online sources and export just the relevant data for your team or client.
- **Pre-processing for dashboards**: Clean and structure external Excel data before feeding it into BI tools or dashboards.
- **Market research**: Collect Excel data from various sites, extract specific industries, regions, or timeframes for comparison.

## Projects Structure

```bash
excel-tool/
│
├── node_modules/                  # Contains all npm packages
├── src/
│   ├── services/
│   │   ├── downloadExcel.js        # Handles downloading Excel file from URL
│   │   ├── filterData.js           # Contains logic to filter the data
│   │   └── exportFilteredData.js   # Responsible for exporting filtered data
│   │
│   └── index.js                    # Main script entry point
│
├── downloads/                      # Folder for saved and filtered Excel files
│   ├── original.xlsx               # Original downloaded file
│   └── filtered.xlsx               # Filtered output file
├── test/                           # Folder for test files
├── jest.config.js                  # Jest configuration file
├── package.json.lock
├── package.json
├── .gitignore
└── README.md
```

## Customization

To change the filter condition:

Go to **src/services/filterData.js** and update the filter logic:

```javascript
// You can customize the filter condition by modifying the logic above
const filteredData = data.filter((row) => row.Country === "Nepal");
```

## License

This project is open-source and free to use for any personal or commercial purpose.

Feel free to modify and distribute it as you see fit. However, please give credit to the original author if you use this code in your projects.

---

