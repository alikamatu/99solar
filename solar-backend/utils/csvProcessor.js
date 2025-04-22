const fs = require('fs');
const csv = require('csv-parser');
const { v4: uuidv4 } = require('uuid');
const pool = require('../models/db');

const processVerizonCSV = async (filename, filePath, uploadedBy) => {
  const fileId = uuidv4();
  const client = await pool.connect();
  
  try {
    await client.query('BEGIN');
    
    // Insert file record
    await client.query(
      `INSERT INTO verizon_files (id, file_name, uploaded_by) 
       VALUES ($1, $2, $3)`,
      [fileId, filename, uploadedBy]
    );
    
    // Process CSV file
    const lots = [];
    const stream = fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => lots.push(row))
      .on('end', async () => {
        try {
          for (const row of lots) {
            await client.query(
              `INSERT INTO lots (
                id, verizon_file_id, lot_number, item_description,
                oem, sku, prop65_warning, description,
                disposition, quantity, unit_awarded_price
              ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11
              )`,
              [
                uuidv4(),
                fileId,
                row['Listing Id'],
                row['Description'],
                row['OEM'] || 'UNK',
                row['SKU'],
                row['Prop65 Warning'],
                row['Description'],
                row['Disposition'],
                parseFloat(row['Quantity']),
                parseFloat(row['Unit Awarded Price'])
              ]
            );
          }
        } catch (error) {
          stream.destroy();
          throw error;
        }
      });
    
    await new Promise((resolve, reject) => {
      stream.on('finish', resolve);
      stream.on('error', reject);
    });
    
    await client.query('COMMIT');
    return { fileId, lotCount: lots.length };
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
    // Clean up file
    fs.unlink(filePath, (err) => {
      if (err) console.error('Error deleting temp file:', err);
    });
  }
};

module.exports = { processVerizonCSV };