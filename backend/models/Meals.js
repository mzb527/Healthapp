// backend/models/Meal.js
const mongoose = require('mongoose');

const MealSchema = new mongoose.Schema({
  mealName: { type: String, required: true },
  calories: { type: Number, required: true },
  mealType: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Meal', MealSchema);