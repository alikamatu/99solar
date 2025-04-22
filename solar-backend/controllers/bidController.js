const pool = require("../models/db");

// Get all bids with filtering and pagination
exports.getBids = async (req, res) => {
  try {
    const { status, lot_id, user_id, page = 1, limit = 20 } = req.query;
    
    let query = `
      SELECT 
        b.id, b.bid_amount, b.status, b.submitted_at,
        u.id as user_id, u.name as user_name, u.email as user_email,
        l.id as lot_id, l.item_description as lot_description
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
        total: result.rows.length
      }
    });
  } catch (error) {
    console.error('Error fetching bids:', error);
    res.status(500).json({ error: 'Failed to fetch bids' });
  }
};

// Award a bid to a user
exports.awardBid = async (req, res) => {
  const client = await pool.connect();
  
  try {
    const { id: bidId } = req.params;
    const { final_price, commission } = req.body;
    
    await client.query('BEGIN');
    
    // 1. Get the bid details
    const bidQuery = await client.query(
      `SELECT id, user_id, lot_id, bid_amount 
       FROM bids WHERE id = $1 AND status = 'pending' FOR UPDATE`,
      [bidId]
    );
    
    if (bidQuery.rows.length === 0) {
      return res.status(404).json({ error: 'Bid not found or already processed' });
    }
    
    const bid = bidQuery.rows[0];
    
    // 2. Update the bid status to awarded
    await client.query(
      `UPDATE bids SET status = 'awarded' WHERE id = $1`,
      [bidId]
    );
    
    // 3. Reject all other bids for this lot
    await client.query(
      `UPDATE bids SET status = 'rejected' 
       WHERE lot_id = $1 AND id != $2 AND status = 'pending'`,
      [bid.lot_id, bidId]
    );
    
    // 4. Create awarded bid record
    const awardedBid = await client.query(
      `INSERT INTO awarded_bids 
       (lot_id, awarded_to, final_price, commission)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [bid.lot_id, bid.user_id, final_price, commission]
    );
    
    // 5. Update lot status or availability if needed
    await client.query(
      `UPDATE lots SET available_to = NOW() WHERE id = $1`,
      [bid.lot_id]
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