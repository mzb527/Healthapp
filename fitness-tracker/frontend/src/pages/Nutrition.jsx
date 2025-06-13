import styled from "styled-components";
import Navbar from "../components/Navbar";

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
  background-color: #ff8c00;
  color: white;
  padding: 15px 30px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #e07a00;
    transform: scale(1.05);
  }
`;

function Nutrition() {
  return (
    <PageContainer>
      <Navbar />
      <Header>Nutrition</Header>
      <ButtonWrapper>
        <FloatingButton>Button 1</FloatingButton>
        <FloatingButton>Button 2</FloatingButton>
        <FloatingButton>Button 3</FloatingButton>
        <FloatingButton>Button 4</FloatingButton>
      </ButtonWrapper>
    </PageContainer>
  );
}

export default Nutrition;