// backend/controllers/exerciseController.js
const Workout = require('../models/Workout');

exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.addWorkout = async (req, res) => {
  try {
    const { activity, duration, calories } = req.body;
    const newWorkout = new Workout({ activity, duration, calories });
    const savedWorkout = await newWorkout.save();
    res.json(savedWorkout);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};