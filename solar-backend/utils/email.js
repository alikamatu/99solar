const nodemailer = require('nodemailer');
const pool = require('../models/db');

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
});

exports.sendVerificationEmail = async (email, code) => {
    const mailOptions = {
        from: `"Your App Name" <${process.env.EMAIL_FROM}>`,
        to: email,
        subject: 'Your Verification Code',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #4f46e5;">Verify Your Email</h2>
                <p>Your verification code is:</p>
                <div style="font-size: 24px; font-weight: bold; letter-spacing: 2px; 
                    margin: 20px 0; padding: 10px 15px; background: #f3f4f6; 
                    display: inline-block; border-radius: 4px;">
                    ${code}
                </div>
                <p>This code will expire in 15 minutes.</p>
                <p style="margin-top: 30px; color: #6b7280; font-size: 14px;">
                    If you didn't request this code, you can safely ignore this email.
                </p>
            </div>
        `
    };

    await transporter.sendMail(mailOptions);
};

exports.sendBidInvitations = async (fileId) => {
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
  