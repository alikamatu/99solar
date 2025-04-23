const pool = require('../models/db');
const { processVerizonCSV } = require('../utils/csvProcessor');
const { sendBidInvitations } = require('../utils/email');

exports.uploadLots = async (req, res) => {
  try {
    const userId = req.body.userId || req.user?.id; // Use userID from body or req.user
    console.log("User ID:", userId);

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
    const { available_from, available_to, commission_rate } = req.body;

    const result = await pool.query(
      `UPDATE lots 
       SET available_from = $1, available_to = $2, commission_rate = $3, updated_at = NOW()
       WHERE id = $4 RETURNING *`,
      [available_from, available_to, commission_rate, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Lot not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating lot:', error);
    res.status(500).json({ error: 'Failed to update lot' });
  }
};