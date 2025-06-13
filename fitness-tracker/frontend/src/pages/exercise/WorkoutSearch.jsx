// src/pages/exercise/WorkoutSearch.jsx
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../components/Navbar";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 24px;
  max-width: 600px;
  margin-top: 40px;
  width: 90%;
`;

const ButtonCard = styled.button`
  padding: 24px;
  font-size: 16px;
  background-color: #e0f2f1;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #b2dfdb;
  }
`;

function WorkoutSearch() {
  const navigate = useNavigate();

  const handleSelect = (activity) => {
    navigate("/exercise/log", { state: { activity } });
  };

  return (
    <>
      <Navbar />
      <PageContainer>
        <h1>Choose a Workout</h1>
        <Grid>
          <ButtonCard onClick={() => handleSelect("running, general")}>Running</ButtonCard>
          <ButtonCard onClick={() => handleSelect("cycling, 12-13.9 mph, moderate")}>Cycling</ButtonCard>
          <ButtonCard onClick={() => handleSelect("yoga")}>Yoga</ButtonCard>
          <ButtonCard onClick={() => handleSelect("jumping rope, fast")}>Jump Rope</ButtonCard>
        </Grid>
      </PageContainer>
    </>
  );
}

export default WorkoutSearch;