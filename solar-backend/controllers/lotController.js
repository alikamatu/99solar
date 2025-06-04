const pool = require('../models/db');
const { v4: uuidv4 } = require('uuid'); // Import the uuid package
const { processVerizonCSV } = require('../utils/csvProcessor');
const { sendBidInvitations } = require('../utils/email');

exports.uploadLots = async (req, res) => {
  try {
    const userId = req.body.userId || req.user?.id; // Use userID from body or req.user
    console.log("User ID:", userId);
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { filename, path } = req.file;

    const { fileId, lotCount } = await processVerizonCSV(filename, path, userId);

    // await sendBidInvitations(fileId);

    res.status(201).json({
      message: `${lotCount} lots uploaded successfully`,
      fileId,
    });
  } catch (error) {
    console.error('Error uploading lots:', error);
    res.status(500).json({ error: 'Failed to process file' });
  }
};


exports.uploadLotsFrom = async (req, res) => {
  try {
    const userId = req.body.userId || req.user?.id; // Use userID from body or req.user
    console.log("User ID:", userId);

    // Validate required fields
    const {
      lotNumber,
      itemDescription,
      grade,
      quantity,
      basePrice,
      commissionRate,
      oem,
      sku,
      prop65Warning,
      description,
      disposition,
      availableFrom,
      availableTo,
    } = req.body;

    if (
      !lotNumber ||
      !itemDescription ||
      !quantity ||
      !basePrice ||
      !availableFrom ||
      !availableTo ||
      !disposition
    ) {
      return res.status(400).json({ error: "Required fields are missing." });
    }

    // Validate disposition value
    const validDispositions = ["DNB", "DNC", "DNA"];
    if (!validDispositions.includes(disposition)) {
      return res.status(400).json({ error: "Invalid disposition value." });
    }

    // Generate a unique ID for the lot
    const id = uuidv4();

    const result = await pool.query(
      `INSERT INTO lots (
         id, lot_number, item_description, grade, quantity, base_price, commission_rate, 
         oem, sku, prop65_warning, description, disposition, available_from, available_to, updated_at
       ) VALUES (
         $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, NOW()
       ) RETURNING *`,
      [
        id,
        lotNumber,
        itemDescription,
        grade,
        quantity,
        basePrice,
        commissionRate || 0.1,
        oem,
        sku,
        prop65Warning,
        description,
        disposition,
        availableFrom,
        availableTo,
      ]
    );

    res.status(201).json({
      message: "Lot uploaded successfully.",
      lot: result.rows[0],
    });
  } catch (error) {
    console.error("Error uploading lot:", error);
    res.status(500).json({ error: "Failed to upload lot." });
  }
};

exports.getLots = async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;

    let query = 'SELECT * FROM lots';
    const params = [];

    if (status) {
      query += ' WHERE status = $1';
      params.push(status);
    }

    query += ` ORDER BY created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
    params.push(Number(limit), (Number(page) - 1) * Number(limit));

    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching lots:', error);
    res.status(500).json({ error: 'Failed to fetch lots' });
  }
};

exports.updateLot = async (req, res) => {
  try {
    const { id } = req.params;
    const { available_from, available_to, commission_rate, base_price } = req.body;

    const result = await pool.query(
      `UPDATE lots 
       SET available_from = $1, available_to = $2, commission_rate = $3, base_price = $4, updated_at = NOW()
       WHERE id = $5 RETURNING *`,
      [available_from, available_to, commission_rate, base_price, id]
    );

        console.log('Updated Lot:', result.rows[0]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Lot not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating lot:', error);
    res.status(500).json({ error: 'Failed to update lot' });
  }
};

exports.deleteLots = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM lots WHERE id = $1", [id]);
    res.status(200).json({ message: "Lot deleted successfully." });
  } catch (error) {
    console.error("Error deleting lot:", error);
    res.status(500).json({ error: "Failed to delete lot." });
  }
};

exports.clearLots = async (req, res) => {
  try {
    // Delete all bids associated with lots
    await pool.query("DELETE FROM bids");

    // Delete all lots
    await pool.query("DELETE FROM lots");

    res.status(200).json({ message: "All lots and associated bids cleared successfully." });
  } catch (error) {
    console.error("Error clearing lots:", error);
    res.status(500).json({ error: "Failed to clear lots." });
  }
};