// src/pages/nutrition/LogMeals.jsx
import { useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
`;

const Form = styled.form`
  background: #fff3e0;
  padding: 20px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  background-color: #ff9800;
  border: none;
  color: white;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #fb8c00;
  }
`;

function LogMeals() {
  const [mealData, setMealData] = useState({
    mealName: "",
    calories: "",
    mealType: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMealData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we'll simply show a message. Later you'll hook this up to the backend.
    setMessage(
      `Logged meal: ${mealData.mealName} with ${mealData.calories} calories.`
    );
    // Clear form
    setMealData({
      mealName: "",
      calories: "",
      mealType: "",
    });
  };

  return (
    <>
      <Navbar />
      <PageContainer>
        <h1>Log Meals</h1>
        <Form onSubmit={handleSubmit}>
          <Label>Meal Name:</Label>
          <Input
            type="text"
            name="mealName"
            value={mealData.mealName}
            onChange={handleChange}
            required
          />
          <Label>Calories:</Label>
          <Input
            type="number"
            name="calories"
            value={mealData.calories}
            onChange={handleChange}
            required
          />
          <Label>Meal Type (e.g., Breakfast, Lunch, Dinner):</Label>
          <Input
            type="text"
            name="mealType"
            value={mealData.mealType}
            onChange={handleChange}
            required
          />
          <SubmitButton type="submit">Log Meal</SubmitButton>
        </Form>
        {message && (
          <p style={{ marginTop: "20px", color: "#ff9800" }}>{message}</p>
        )}
      </PageContainer>
    </>
  );
}

export default LogMeals;