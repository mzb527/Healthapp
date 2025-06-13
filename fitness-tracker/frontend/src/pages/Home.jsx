import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 100px;
`;

const StyledButton = styled(Link)`
  background-color: #4CAF50;
  color: white;
  padding: 20px;
  font-size: 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 30vh;
  transition: transform 0.2s ease-in-out, background-color 0.3s;

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <ButtonWrapper>
        <StyledButton to="/exercise">Exercise</StyledButton>
        <StyledButton to="/nutrition">Nutrition</StyledButton>
      </ButtonWrapper>
    </HomeContainer>
  );
}

export default Home;