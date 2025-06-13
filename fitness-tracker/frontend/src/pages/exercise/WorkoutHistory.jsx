// src/pages/exercise/WorkoutHistory.jsx
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
  gap: 24px;
  width: 90%;
  max-width: 800px;
  margin-top: 40px;
`;

const EntryCard = styled.div`
  background-color: #f0f4c3;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
`;

function WorkoutHistory() {
  const [history, setHistory] = useState([
    { activity: "Running", duration: 30, calories: 280 },
    { activity: "Cycling", duration: 45, calories: 400 },
    { activity: "Yoga", duration: 60, calories: 200 },
    { activity: "Jump Rope", duration: 20, calories: 250 },
  ]);

  return (
    <>
      <Navbar />
      <PageContainer>
        <h1>Workout History</h1>
        <HistoryGrid>
          {history.length === 0 ? (
            <p>No workouts logged yet.</p>
          ) : (
            history.map((entry, index) => (
              <EntryCard key={index}>
                <strong>{entry.activity}</strong><br />
                Duration: {entry.duration} min<br />
                Calories Burned: {entry.calories}
              </EntryCard>
            ))
          )}
        </HistoryGrid>
      </PageContainer>
    </>
  );
}

export default WorkoutHistory;