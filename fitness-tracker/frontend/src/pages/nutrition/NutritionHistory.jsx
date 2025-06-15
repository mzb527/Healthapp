// src/pages/nutrition/NutritionHistory.jsx
import { useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
`;

const HistoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  width: 90%;
  max-width: 800px;
  margin-top: 40px;
`;

const EntryCard = styled.div`
  background-color: #fbe9e7;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
`;

function NutritionHistory() {
  // Dummy data for now; later you'll load real history data.
  const [history] = useState([
    { mealName: "Oatmeal", calories: 250, mealType: "Breakfast" },
    { mealName: "Grilled Chicken Salad", calories: 350, mealType: "Lunch" },
    { mealName: "Steak & Veggies", calories: 700, mealType: "Dinner" },
  ]);

  return (
    <>
      <Navbar />
      <PageContainer>
        <h1>Nutrition History</h1>
        <HistoryGrid>
          {history.length === 0 ? (
            <p>No meals logged yet.</p>
          ) : (
            history.map((meal, index) => (
              <EntryCard key={index}>
                <strong>{meal.mealName}</strong>
                <br />
                Calories: {meal.calories}
                <br />
                Meal Type: {meal.mealType}
              </EntryCard>
            ))
          )}
        </HistoryGrid>
      </PageContainer>
    </>
  );
}

export default NutritionHistory;