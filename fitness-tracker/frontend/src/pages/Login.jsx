import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Header = styled.h1`
  margin-top: 50px;
  font-size: 36px;
`;

function Login() {
  return (
    <PageContainer>
      <Header>Login Page</Header>
      {/* Future login functionality will go here */}
    </PageContainer>
  );
}

export default Login;