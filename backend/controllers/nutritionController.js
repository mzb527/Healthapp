// backend/controllers/nutritionController.js
const Meal = require('../models/Meal');

exports.getMeals = async (req, res) => {
  try {
    const meals = await Meal.find();
    res.json(meals);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.addMeal = async (req, res) => {
  try {
    const { mealName, calories, mealType } = req.body;
    const newMeal = new Meal({ mealName, calories, mealType });
    const savedMeal = await newMeal.save();
    res.json(savedMeal);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};