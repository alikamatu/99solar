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
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
    files: 5 // Max 5 files per upload
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'text/csv' || path.extname(file.originalname) === '.csv') {
      cb(null, true);
    } else {
      cb(new Error('Only CSV files are allowed'));
    }
  }
});

// Process multiple files
router.post('/upload', upload.array('files', 5), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const processedFiles = [];
    const errors = [];

    // Process each file in parallel
    await Promise.all(req.files.map(async (file) => {
      try {
        const filePath = file.path;
        const csvData = await processCSV(filePath);
        const outputFilename = `${Date.now()}-${file.originalname.replace('.csv', '.xlsx')}`;
        const outputPath = path.join(__dirname, '..', 'downloads', outputFilename);

        await createExcelFile(csvData, outputPath);
        
        // Store in database
        await db.query(
          'INSERT INTO uploaded_files (filename, processed_name) VALUES ($1, $2)',
          [file.originalname, outputFilename]
        );

        processedFiles.push({
          originalName: file.originalname,
          processedName: outputFilename,
          downloadLink: `/downloads/${outputFilename}`
        });

        // Clean up
        fs.unlinkSync(filePath);
      } catch (error) {
        errors.push({
          filename: file.originalname,
          error: error.message
        });
        console.error(`Error processing ${file.originalname}:`, error);
      }
    }));

    if (processedFiles.length === 0) {
      return res.status(500).json({ 
        error: 'All files failed to process',
        details: errors
      });
    }

    res.json({
      success: true,
      message: `Processed ${processedFiles.length} file(s)`,
      processedFiles,
      ...(errors.length > 0 && { 
        errors,
        errorMessage: `${errors.length} file(s) failed to process` 
      })
    });

  } catch (error) {
    console.error('Upload processing failed:', error);
    res.status(500).json({ 
      error: 'File processing failed',
      details: error.message 
    });
  }
});

// Download processed file
router.get('/download/:filename', (req, res) => {
  const filePath = path.join(__dirname, '..', 'downloads', req.params.filename);
  
  if (fs.existsSync(filePath)) {
    res.download(filePath, (err) => {
      if (err) {
        console.error('Download error:', err);
        res.status(500).json({ error: 'File download failed' });
      }
    });
  } else {
    res.status(404).json({ error: 'File not found' });
  }
});

// Helper function to process CSV
async function processCSV(filePath) {
  return new Promise((resolve, reject) => {
    const csvData = [];
    const parser = fs.createReadStream(filePath)
      .pipe(parse({ 
        columns: true, 
        trim: true,
        skip_empty_lines: true
      }));

    parser.on('data', (row) => {
      const cleanedRow = {};
      Object.entries(row).forEach(([key, value], index) => {
        if (index !== 3) { // Skip column at index 3
          cleanedRow[key] = value;
        }
      });
      csvData.push(cleanedRow);
    });

    parser.on('end', () => resolve(csvData));
    parser.on('error', (error) => reject(error));
  });
}

// Helper function to create Excel file
async function createExcelFile(data, outputPath) {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Cleaned Data');

  if (data.length > 0) {
    sheet.columns = Object.keys(data[0]).map(key => ({ 
      header: key, 
      key,
      width: Math.min(30, key.length + 5) // Dynamic column width
    }));
    
    data.forEach(row => sheet.addRow(row));
  }

  // Create downloads directory if it doesn't exist
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  await workbook.xlsx.writeFile(outputPath);
}

module.exports = router;