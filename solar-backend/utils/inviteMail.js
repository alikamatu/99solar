const nodemailer = require('nodemailer');
const pool = require('../models/db');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendBidInvitations = async (fileId) => {
  try {
    // Get active users who should receive notifications
    const users = await pool.query(
      `SELECT id, email, name FROM users 
       WHERE is_verified = true AND role = 'customer'`
    );
    
    // Get lots from this file
    const lots = await pool.query(
      `SELECT id, item_description, quantity, unit_awarded_price 
       FROM lots WHERE verizon_file_id = $1`,
      [fileId]
    );
    
    // Send emails
    for (const user of users.rows) {
      for (const lot of lots.rows) {
        await transporter.sendMail({
          from: `"Bidding Platform" <${process.env.EMAIL_FROM}>`,
          to: user.email,
          subject: `New Bidding Opportunity: ${lot.item_description}`,
          html: `
            <h2>New Lot Available for Bidding</h2>
            <p>Hello ${user.name},</p>
            <p>A new lot has been added to our platform:</p>
            <ul>
              <li><strong>Item:</strong> ${lot.item_description}</li>
              <li><strong>Quantity:</strong> ${lot.quantity}</li>
              <li><strong>Base Price:</strong> $${lot.unit_awarded_price.toFixed(2)}</li>
            </ul>
            <p>
              <a href="${process.env.CLIENT_URL}/lots/${lot.id}">
                Click here to place your bid
              </a>
            </p>
          `,
        });
        
        // Record notification in database
        await pool.query(
          `INSERT INTO email_notifications 
           (user_id, subject, message, notification_type, is_sent, sent_at)
           VALUES ($1, $2, $3, $4, true, NOW())`,
          [
            user.id,
            `New Bidding Opportunity: ${lot.item_description}`,
            `A new lot (${lot.item_description}) is available for bidding.`,
            'bid_invitation'
          ]
        );
      }
    }
  } catch (error) {
    console.error('Error sending bid invitations:', error);
    throw error;
  }
};

module.exports = { sendBidInvitations };