import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #333;
  padding: 15px 20px;
  position: fixed;
  top: 0;
  left: 0;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 20px;
`;

const NavButton = styled(Link)`
  background-color: transparent;
  color: white;
  font-size: 18px;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

const LoginButton = styled(Link)`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavButtons>
        <NavButton to="/">Home</NavButton>
        <NavButton to="/exercise">Exercise</NavButton>
        <NavButton to="/nutrition">Nutrition</NavButton>
      </NavButtons>
      <LoginButton to="/login">Login</LoginButton>
    </NavbarContainer>
  );
}

export default Navbar;