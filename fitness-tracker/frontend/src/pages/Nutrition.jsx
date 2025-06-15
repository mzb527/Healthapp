// src/pages/Nutrition.jsx
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const PageContainer = styled.div`
  text-align: center;
  padding-top: 80px;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin: 40px auto;
  width: 90%;
  max-width: 600px;
`;

const MenuButton = styled.button`
  padding: 20px;
  font-size: 16px;
  background-color: #fff3e0;
  border: 2px solid #ff9800;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #ffe0b2;
  }
`;

function Nutrition() {
  return (
    <>
      <Navbar />
      <PageContainer>
        <h1>Nutrition</h1>
        <MenuGrid>
          <Link to="/nutrition/log">
            <MenuButton>Log Meals</MenuButton>
          </Link>
          <Link to="/nutrition/history">
            <MenuButton>Nutrition History</MenuButton>
          </Link>
          <Link to="/nutrition/tracker">
            <MenuButton>Calorie Tracker</MenuButton>
          </Link>
          <Link to="/nutrition/insights">
            <MenuButton>Nutrition Insights</MenuButton>
          </Link>
        </MenuGrid>
      </PageContainer>
    </>
  );
}

export default Nutrition;