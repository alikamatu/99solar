const nodemailer = require('nodemailer');

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