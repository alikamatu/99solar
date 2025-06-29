const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);
router.post('/verify-email', authController.verifyEmail);
router.post('/resend-verification', authController.resendVerification);
// router.get('/resend-verification', authController.resendVerification);

// Protected route to test auth
router.get('/me', (req, res) => {
  res.json({ message: 'You are authenticated!', user: req.user });
});

module.exports = router;
