// backend/app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

// Route files
const exerciseRoutes = require('./routes/exerciseRoutes');
const nutritionRoutes = require('./routes/nutritionRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to the MongoDB database
connectDB();

// Define routes
app.use('/api/exercise', exerciseRoutes);
app.use('/api/nutrition', nutritionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});