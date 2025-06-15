// src/pages/nutrition/CalorieTracker.jsx
import { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
`;

const TrackerBox = styled.div`
  background-color: #e8f5e9;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  text-align: center;
  margin-top: 40px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
`;

function CalorieTracker() {
  // Dummy data—replace this with real meal data later.
  const [meals] = useState([
    { mealName: "Oatmeal", calories: 250 },
    { mealName: "Grilled Chicken Salad", calories: 350 },
    { mealName: "Steak & Veggies", calories: 700 },
  ]);

  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    const total = meals.reduce((sum, meal) => sum + meal.calories, 0);
    setTotalCalories(total);
  }, [meals]);

  return (
    <>
      <Navbar />
      <PageContainer>
        <h1>Calorie Tracker</h1>
        <TrackerBox>
          <p>
            <strong>Total Calories Today:</strong> {totalCalories}
          </p>
          <p>
            <strong>Meal Count:</strong> {meals.length}
          </p>
        </TrackerBox>
      </PageContainer>
    </>
  );
}

export default CalorieTracker;