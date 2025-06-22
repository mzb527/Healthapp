// backend/app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();
const connectDB = require('./config/db');

const exerciseRoutes = require('./routes/exerciseRoutes');
const nutritionRoutes = require('./routes/nutritionRoutes');
const authRoutes = require('./routes/authroutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware stack
app.use(helmet());             // Sets secure HTTP headers
app.use(cors());               // Enables CORS
app.use(morgan('dev'));        // Logs HTTP requests
app.use(bodyParser.json());    // Parses JSON bodies

// Routes
app.use('/api/exercise', exerciseRoutes);
app.use('/api/nutrition', nutritionRoutes);
app.use('/api/auth', authRoutes);

// Catch-all 404
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack || err.message);
  const status = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(status).json({ message: err.message || 'Something went wrong' });
});

// Boot it up
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server live on port ${PORT}`));