// /server/routes/fileUpload.js

const express = require('express');
const multer = require('multer');
const { parse } = require('csv-parse');
const ExcelJS = require('exceljs');
const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');
const db = new Pool({ connectionString: process.env.DATABASE_URL });


const router = express.Router();

// Configure multer for file upload
const upload = multer({ dest: 'uploads/' });

// Define columns to remove (based on Verizon CSV structure)
const UNWANTED_COLUMNS = ['Extra Column 1', 'Notes', 'Unused']; // update to actual column names

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const filePath = req.file.path;

    const csvData = [];
    const parser = fs.createReadStream(filePath)
      .pipe(parse({ columns: true, trim: true }));

    // Collect and filter rows
    for await (const row of parser) {
        const cleanedRow = {};
        const entries = Object.entries(row);
        
        // Keep all columns except index 3 (Column D)
        entries.forEach(([key, value], index) => {
          if (index !== 3) {
            cleanedRow[key] = value;
          }
        });
      csvData.push(cleanedRow);
    }

    // Create Excel workbook
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Cleaned Data');

    // Add headers and rows
    if (csvData.length > 0) {
      sheet.columns = Object.keys(csvData[0]).map(key => ({ header: key, key }));
      csvData.forEach(row => sheet.addRow(row));
    }

    // Prepare Excel file for download
    const outputPath = path.join(__dirname, '..', 'downloads', `${Date.now()}-cleaned.xlsx`);
    await workbook.xlsx.writeFile(outputPath);

    await db.query(
        'INSERT INTO uploaded_files (filename) VALUES ($1)',
        [req.file.originalname]
      );
    console.log('File saved to database:', req.file.originalname);
    // Clean up uploaded file      

    // Return file as response
    res.download(outputPath, 'cleaned-verizon.xlsx', (err) => {
      fs.unlinkSync(filePath); // delete uploaded file
      fs.unlinkSync(outputPath); // delete generated file
      if (err) {
        console.error('Download error:', err);
      }
    });

  } catch (error) {
    console.error('Upload failed:', error);
    res.status(500).json({ error: 'File processing failed' });
  }
});

module.exports = router;
