import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Banner = styled.section`
  flex: 1;

  background-image: url('/school.png');
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(255, 0, 150, 0.4);

  height: 100%;
  width: 100%;
`;

const LoginSection = styled.section`
  flex: 1;
`;

const LoginPage = () => (
  <Container>
    <Banner></Banner>
    <LoginSection></LoginSection>
  </Container>
);

export default LoginPage;