const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models/db');
const pool = require('../models/db');

exports.register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        const result = await pool.query(
            'INSERT INTO users (id, name, email, password, role) VALUES (gen_random_uuid(), $1, $2, $3, $4) RETURNING *',
            [name, email, hashedPassword, role]
        );
        res.status(201).json({ success: true, user: result.rows[0] });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ success: false, error: 'Registration failed' });
    }
};
// Login existing user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ 
        success: false,
        error: 'Email and password are required' 
      });
    }

    // Find user
    const userQuery = await pool.query(
      'SELECT id, name, email, password, role FROM users WHERE email = $1',
      [email]
    );
    
    const user = userQuery.rows[0];

    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }

    // Create JWT token
    const token = jwt.sign(
      { 
        id: user.id,
        role: user.role 
      },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Set HTTP-only cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    // Return response (excluding password)
    const { password: _, ...userData } = user;
    
    res.status(200).json({
      success: true,
      token,
      user: userData
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};
