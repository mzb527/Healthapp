// src/pages/exercise/LogWorkout.jsx
import { useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
`;

const SlotsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  max-width: 800px;
  margin-top: 40px;
  width: 90%;
`;

const SlotButton = styled.button`
  background-color: ${(props) => (props.filled ? "#dcedc8" : "#f5f5f5")};
  border: 2px dashed #ccc;
  border-radius: 12px;
  padding: 24px;
  font-size: 16px;
  height: 140px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.filled ? "#c5e1a5" : "#e0e0e0")};
  }
`;

function LogWorkout() {
  const [slots, setSlots] = useState([null, null, null, null]);

  const handleSlotClick = (index) => {
    const activity = prompt("Enter activity name:");
    const duration = prompt("Enter duration (minutes):");

    if (activity && duration) {
      const newSlot = {
        activity,
        duration: parseFloat(duration),
      };
      const updatedSlots = [...slots];
      updatedSlots[index] = newSlot;
      setSlots(updatedSlots);
    }
  };

  return (
    <>
      <Navbar />
      <PageContainer>
        <h1>Log Your Workouts</h1>
        <SlotsGrid>
          {slots.map((slot, index) => (
            <SlotButton
              key={index}
              onClick={() => handleSlotClick(index)}
              filled={!!slot}
            >
              {slot ? (
                <>
                  <strong>{slot.activity}</strong><br />
                  {slot.duration} min
                </>
              ) : (
                "Add Workout"
              )}
            </SlotButton>
          ))}
        </SlotsGrid>
      </PageContainer>
    </>
  );
}

export default LogWorkout;