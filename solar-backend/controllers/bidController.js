const pool = require("../models/db");
const { v4: isUUID } = require('uuid'); // Import a UUID validation function

// Get all bids with filtering and pagination
exports.getBids = async (req, res) => {
  try {
    const { status, lot_id, user_id, page = 1, limit = 20 } = req.query;

    let query = `
      SELECT 
        b.id AS bid_id, 
        b.bid_amount, 
        b.status,
        b.bid_time, 
        b.submitted_at,
        u.id AS user_id, 
        u.name AS user_name, 
        u.email AS user_email,
        l.id AS lot_id, 
        l.lot_number AS lot_number,
        l.item_description AS lot_description
      FROM bids b
      JOIN users u ON b.user_id = u.id
      JOIN lots l ON b.lot_id = l.id
    `;

    const conditions = [];
    const params = [];

    if (status) {
      conditions.push(`b.status = $${params.length + 1}`);
      params.push(status);
    }

    if (lot_id) {
      conditions.push(`b.lot_id = $${params.length + 1}`);
      params.push(lot_id);
    }

    if (user_id) {
      conditions.push(`b.user_id = $${params.length + 1}`);
      params.push(user_id);
    }

    if (conditions.length > 0) {
      query += ` WHERE ${conditions.join(' AND ')}`;
    }

    query += ` ORDER BY b.submitted_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
    params.push(Number(limit), (Number(page) - 1) * Number(limit));

    const result = await pool.query(query, params);

    res.json({
      bids: result.rows,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: result.rows.length,
      },
    });
  } catch (error) {
    console.error('Error fetching bids:', error);
    res.status(500).json({ error: 'Failed to fetch bids' });
  }
};

exports.createBid = async (req, res) => {
  try {
    const { userId, lot_id, bid_amount } = req.body;

    // Validate required fields
    if (!userId || !lot_id || !bid_amount) {
      return res.status(400).json({ error: 'user_id, lot_id, and bid_amount are required' });
    }

    // Validate UUIDs
    if (!isUUID(userId) || !isUUID(lot_id)) {
      return res.status(400).json({ error: 'Invalid user_id or lot_id format' });
    }

    const result = await pool.query(
      `INSERT INTO bids (id, user_id, lot_id, bid_amount, submitted_at, status)
       VALUES (gen_random_uuid(), $1, $2, $3, NOW(), 'pending')
       RETURNING *`,
      [userId, lot_id, bid_amount]
    );

    // Increment bids_placed and active_bids
    await pool.query(
      `UPDATE users
       SET bids_placed = bids_placed + 1,
           active_bids = active_bids + 1
       WHERE id = $1`,
      [userId]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating bid:', error);
    res.status(500).json({ error: 'Failed to create bid' });
  }
};

exports.awardBid = async (req, res) => {
  const client = await pool.connect();

  try {
    const { id: bidId } = req.params;
    const { final_price, commission } = req.body;

    await client.query('BEGIN');

    const bidQuery = await client.query(
      `SELECT id, user_id, lot_id, bid_amount 
       FROM bids WHERE id = $1 AND status = 'pending' FOR UPDATE`,
      [bidId]
    );

    if (bidQuery.rows.length === 0) {
      return res.status(404).json({ error: 'Bid not found or already processed' });
    }

    const bid = bidQuery.rows[0];

    await client.query(
      `UPDATE bids SET status = 'awarded' WHERE id = $1`,
      [bidId]
    );

    await client.query(
      `UPDATE bids SET status = 'rejected' 
       WHERE lot_id = $1 AND id != $2 AND status = 'pending'`,
      [bid.lot_id, bidId]
    );

    const awardedBid = await client.query(
      `INSERT INTO awarded_bids 
       (lot_id, awarded_to, final_price, commission)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [bid.lot_id, bid.user_id, final_price, commission]
    );

    await client.query(
      `UPDATE lots SET available_to = NOW() WHERE id = $1`,
      [bid.lot_id]
    );

    // Update user counts
    await client.query(
      `UPDATE users
       SET active_bids = active_bids - 1,
           won_bids = won_bids + 1
       WHERE id = $1`,
      [bid.user_id]
    );

    await client.query('COMMIT');

    res.json({
      message: 'Bid awarded successfully',
      awardedBid: awardedBid.rows[0]
    });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error awarding bid:', error);
    res.status(500).json({ error: 'Failed to award bid' });
  } finally {
    client.release();
  }
};

exports.getUserBids = async (req, res) => {
  const { userId } = req.params;

  try {
    // Validate userId
    if (!userId) {
      return res.status(400).json({ error: "User ID is required." });
    }

    const query = `
      SELECT 
        b.id AS bid_id,
        b.bid_amount,
        b.status,
        b.bid_time,
        l.id AS lot_id,
        l.lot_number,
        l.item_description
      FROM bids b
      JOIN lots l ON b.lot_id = l.id
      WHERE b.user_id = $1
      ORDER BY b.bid_time DESC
    `;

    const result = await pool.query(query, [userId]);

    res.json({
      bids: result.rows,
    });
  } catch (error) {
    console.error("Error fetching user bids:", error);
    res.status(500).json({ error: "Failed to fetch user bids." });
  }
};


exports.getUserProfile = async (req, res) => {
  const { userId } = req.params;

  try {
    // Validate userId
    if (!userId) {
      return res.status(400).json({ error: "User ID is required." });
    }

    // Query to fetch user profile
    const userQuery = `
      SELECT 
        name,
        email,
        bids_placed,
        active_bids,
        won_bids
      FROM users
      WHERE id = $1
    `;

    const result = await pool.query(userQuery, [userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found." });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ error: "Failed to fetch user profile." });
  }
};

// Award a bid
exports.bidAwards = async (req, res) => {
  const { bidId } = req.params;
  const { final_price, commission } = req.body;

  try {
    // Start transaction
    await pool.query('BEGIN');

    // 1. Get bid details
    const bidResult = await pool.query(
      'SELECT * FROM bids WHERE id = $1 FOR UPDATE',
      [bidId]
    );
    
    if (bidResult.rows.length === 0) {
      await pool.query('ROLLBACK');
      return res.status(404).json({ message: 'Bid not found' });
    }
    
    const bid = bidResult.rows[0];
    
    // 2. Update bid status to awarded
    await pool.query(
      'UPDATE bids SET status = \'awarded\' WHERE id = $1',
      [bidId]
    );
    
    // 3. Reject all other bids for the same lot
    await pool.query(
      'UPDATE bids SET status = \'rejected\' WHERE lot_id = $1 AND id != $2',
      [bid.lot_id, bidId]
    );
    
    // 4. Create an award record
    await pool.query(
      `INSERT INTO awards 
        (bid_id, lot_id, user_id, final_price, commission, awarded_at) 
        VALUES ($1, $2, $3, $4, $5, NOW())`,
      [bidId, bid.lot_id, bid.user_id, final_price, commission]
    );
    
    // Commit transaction
    await pool.query('COMMIT');
    
    // 5. Return updated bid
    const updatedBidResult = await pool.query(
      `SELECT 
        b.*, 
        u.name AS user_name, 
        u.email AS user_email 
      FROM bids b
      JOIN users u ON b.user_id = u.id
      WHERE b.id = $1`,
      [bidId]
    );
    
    res.json(updatedBidResult.rows[0]);
  } catch (error) {
    await pool.query('ROLLBACK');
    console.error('Error awarding bid:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};