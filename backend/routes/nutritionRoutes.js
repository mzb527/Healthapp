// backend/routes/nutritionRoutes.js
const express = require('express');
const router = express.Router();

const { getMeals, addMeal } = require('../controllers/nutritionController');

router.get('/', getMeals);
router.post('/', addMeal);

module.exports = router;