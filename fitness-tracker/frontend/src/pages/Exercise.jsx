import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Header = styled.h1`
  margin-top: 80px;
  font-size: 36px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;

const FloatingButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 15px 30px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }
`;

function Exercise() {
  const navigate = useNavigate();

  const handleLogWorkout = () => {
    console.log("Log Workout clicked");
  };

  const handleViewHistory = () => {
    console.log("View History clicked");
  };

  const handleTrackProgress = () => {
    console.log("Track Progress clicked");
  };

  const handleSearchWorkouts = () => {
    navigate("/exercise/search");
  };

  return (
    <PageContainer>
      <Navbar />
      <Header>Exercise</Header>
      <ButtonWrapper>
        <FloatingButton onClick={handleLogWorkout}>Log Workout</FloatingButton>
        <FloatingButton onClick={handleViewHistory}>View History</FloatingButton>
        <FloatingButton onClick={handleTrackProgress}>Track Progress</FloatingButton>
        <FloatingButton onClick={handleSearchWorkouts}>Search Workouts</FloatingButton>
      </ButtonWrapper>
    </PageContainer>
  );
}

export default Exercise;