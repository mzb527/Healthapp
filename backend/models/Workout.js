// backend/models/Workout.js
const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
  activity: { type: String, required: true },
  duration: { type: Number, required: true },
  calories: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Workout', WorkoutSchema);