// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import WorkoutSearch from "./pages/exercise/WorkoutSearch";
import LogWorkout from "./pages/exercise/LogWorkout";
import WorkoutHistory from "./pages/exercise/WorkoutHistory";
import WorkoutStats from "./pages/exercise/WorkoutStats";
import Nutrition from "./pages/Nutrition";
import LogMeals from "./pages/nutrition/LogMeals";
import NutritionHistory from "./pages/nutrition/NutritionHistory";
import CalorieTracker from "./pages/nutrition/CalorieTracker";
import NutritionInsights from "./pages/nutrition/NutritionInsights";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Exercise Menu & Subpages */}
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/exercise/search" element={<WorkoutSearch />} />
        <Route path="/exercise/log" element={<LogWorkout />} />
        <Route path="/exercise/history" element={<WorkoutHistory />} />
        <Route path="/exercise/stats" element={<WorkoutStats />} />

        {/* Nutrition Menu & Subpages */}
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/nutrition/log" element={<LogMeals />} />
        <Route path="/nutrition/history" element={<NutritionHistory />} />
        <Route path="/nutrition/tracker" element={<CalorieTracker />} />
        <Route path="/nutrition/insights" element={<NutritionInsights />} />
      </Routes>
    </Router>
  );
}

export default App;