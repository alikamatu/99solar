const { v4: uuidv4 } = require('uuid');
const pool = require('../models/db');

// Get all users with filtering and pagination
exports.getUsers = async (req, res) => {
  try {
    const { role, verified, search, page = 1, limit = 20 } = req.query;
    
    let query = 'SELECT id, name, email, role, is_verified, created_at FROM users';
    const conditions = [];
    const params = [];
    
    if (role) {
      conditions.push(`role = $${params.length + 1}`);
      params.push(role);
    }
    
    if (verified) {
      conditions.push(`is_verified = $${params.length + 1}`);
      params.push(verified === 'true');
    }
    
    if (search) {
      conditions.push(`(name ILIKE $${params.length + 1} OR email ILIKE $${params.length + 1})`);
      params.push(`%${search}%`);
    }
    
    if (conditions.length > 0) {
      query += ` WHERE ${conditions.join(' AND ')}`;
    }
    
    query += ` ORDER BY created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
    params.push(Number(limit), (Number(page) - 1) * Number(limit));
    
    const result = await pool.query(query, params);
    
    // Get total count for pagination
    const countQuery = 'SELECT COUNT(*) FROM users';
    const countResult = await pool.query(countQuery);
    const total = parseInt(countResult.rows[0].count);
    
    res.json({
      users: result.rows,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total
      }
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// Update user information
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, role, is_verified } = req.body;
    
    // Validate input
    if (role && !['admin', 'customer'].includes(role)) {
      return res.status(400).json({ error: 'Invalid role' });
    }
    
    // Build dynamic update query
    const updates = [];
    const params = [];
    
    if (name) {
      updates.push(`name = $${params.length + 1}`);
      params.push(name);
    }
    
    if (email) {
      updates.push(`email = $${params.length + 1}`);
      params.push(email);
    }
    
    if (role) {
      updates.push(`role = $${params.length + 1}`);
      params.push(role);
    }
    
    if (typeof is_verified === 'boolean') {
      updates.push(`is_verified = $${params.length + 1}`);
      params.push(is_verified);
    }
    
    if (updates.length === 0) {
      return res.status(400).json({ error: 'No fields to update' });
    }
    
    updates.push(`updated_at = NOW()`);
    params.push(id);
    
    const query = `
      UPDATE users 
      SET ${updates.join(', ')}
      WHERE id = $${params.length}
      RETURNING id, name, email, role, is_verified, created_at
    `;
    
    const result = await pool.query(query, params);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating user:', error);
    
    if (error.code === '23505') { // Unique violation
      return res.status(400).json({ error: 'Email already in use' });
    }
    
    res.status(500).json({ error: 'Failed to update user' });
  }
};