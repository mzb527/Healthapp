// src/pages/nutrition/NutritionInsights.jsx
import styled from "styled-components";
import Navbar from "../../components/Navbar";

const PageContainer = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InsightsBox = styled.div`
  background-color: #e3f2fd;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  margin-top: 40px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
`;

function NutritionInsights() {
  const insights = [
    "Incorporate more vegetables in your diet.",
    "Stay hydrated throughout the day.",
    "Balance meals with proteins, fats, and carbohydrates.",
    "Regular physical activity can enhance nutrition.",
  ];

  return (
    <>
      <Navbar />
      <PageContainer>
        <h1>Nutrition Insights</h1>
        <InsightsBox>
          {insights.map((point, index) => (
            <p key={index}>• {point}</p>
          ))}
        </InsightsBox>
      </PageContainer>
    </>
  );
}

export default NutritionInsights;