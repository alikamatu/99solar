const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
});

exports.sendVerificationEmail = async (email, token) => {
    const verificationUrl = `${process.env.FRONTEND_URL}/verify-email/${token}`;
    
    const mailOptions = {
        from: `"Your App Name" <${process.env.EMAIL_FROM}>`,
        to: email,
        subject: 'Verify Your Email Address',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #4f46e5;">Welcome to Our App!</h2>
                <p>Please click the button below to verify your email address:</p>
                <a href="${verificationUrl}" 
                   style="display: inline-block; padding: 12px 24px; background-color: #4f46e5; 
                          color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">
                    Verify Email
                </a>
                <p>If you didn't create an account, you can safely ignore this email.</p>
                <p style="margin-top: 30px; color: #6b7280; font-size: 14px;">
                    If the button doesn't work, copy and paste this link into your browser:<br>
                    ${verificationUrl}
                </p>
            </div>
        `
    };

    await transporter.sendMail(mailOptions);
};