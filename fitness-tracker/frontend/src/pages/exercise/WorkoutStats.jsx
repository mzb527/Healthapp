// src/pages/exercise/WorkoutStats.jsx
import { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
`;

const StatsBox = styled.div`
  background-color: #e3f2fd;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  width: 90%;
  max-width: 600px;
  text-align: center;
  margin-top: 40px;
`;

function WorkoutStats() {
  // Dummy workout history for now
  const [history] = useState([
    { activity: "Running", duration: 30, calories: 280 },
    { activity: "Cycling", duration: 45, calories: 400 },
    { activity: "Yoga", duration: 60, calories: 200 },
    { activity: "Jump Rope", duration: 20, calories: 250 },
  ]);

  const [totalDuration, setTotalDuration] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    const durationSum = history.reduce((sum, entry) => sum + entry.duration, 0);
    const calorieSum = history.reduce((sum, entry) => sum + entry.calories, 0);

    setTotalDuration(durationSum);
    setTotalCalories(calorieSum);
  }, [history]);

  const avgCalories = history.length > 0 ? (totalCalories / history.length).toFixed(1) : 0;

  return (
    <>
      <Navbar />
      <PageContainer>
        <h1>Workout Statistics</h1>
        <StatsBox>
          <p><strong>Total Workouts:</strong> {history.length}</p>
          <p><strong>Total Duration:</strong> {totalDuration} minutes</p>
          <p><strong>Total Calories Burned:</strong> {totalCalories}</p>
          <p><strong>Average Calories per Workout:</strong> {avgCalories}</p>
        </StatsBox>
      </PageContainer>
    </>
  );
}

export default WorkoutStats;