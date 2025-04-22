require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRouth');
const fileUploadRoute = require('./routes/fileUpload');
const lotRoute = require('./routes/lotRoute');

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());

// app.use('/api/auth', authRoutes);
app.use('/api/files', fileUploadRoute);
app.use('/api/lots', lotRoute);


// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`CORS configured for: ${corsOptions.origin}`);
});