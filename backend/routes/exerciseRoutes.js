// backend/routes/exerciseRoutes.js
const express = require('express');
const router = express.Router();

const { getWorkouts, addWorkout } = require('../controllers/exerciseController');

router.get('/', getWorkouts);
router.post('/', addWorkout);

module.exports = router;