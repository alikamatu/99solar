const express = require('express');
const pool = require('../models/db');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { report_date, report_data } = req.body;
    if (!report_date || !Array.isArray(report_data)) {
      return res.status(400).json({ error: 'report_date and report_data are required' });
    }

    const result = await pool.query(
      `INSERT INTO reports (report_date, report_data, created_at)
       VALUES ($1, $2, NOW())
       RETURNING *`,
      [report_date, JSON.stringify(report_data)]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error saving report:', error);
    res.status(500).json({ error: 'Failed to save report' });
  }
});

router.get('/', async (req, res) => {
  try {
    const { date } = req.query;
    
    const result = await pool.query(
      'SELECT * FROM reports WHERE report_date = $1 ORDER BY created_at DESC',
      [date]
    );
    
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;