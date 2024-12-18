const express = require('express');
const connectDB = require('./config/db');
const smsRoutes = require('./routes/smsRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use('/api/sms', smsRoutes);

// Connect DB
connectDB();

module.exports = app;
