import React from 'react';
import styled from 'styled-components';

import colors from 'assets/colors';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Banner = styled.section`
  flex: 1;

  background-image: url('/school-full.png');
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(255, 0, 150, 0.6);

  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BannerTitle = styled.h1`
  color: white;
  font-size: 3rem;

  margin: 1rem 0 0.5rem 0;
`;

const BannerSubtitle = styled.h2`
  color: white;
  font-size: 1.5rem;
  font-weight: normal;

  margin: 0;
`;

const BannerDescription = styled.p`
  color: white;
`;

const LoginSection = styled.section`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 50%;
`;

const LoginLabel = styled.label`
  display: flex;
  flex-direction: column;
  
  margin-bottom: 1.2rem;

  color: ${colors.textMain};
`;

const LoginTextInput = styled.input` 
  border: #D9D9D9 solid 1px;
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 0.7rem 0.7rem;
  margin-top: 0.5rem;

  outline: none;
`;

const LoginPage = () => (
  <Container>
    <Banner>
      <img src="/council-logo-white.svg" alt="학생회 로고" />
      <BannerTitle>디미청원</BannerTitle>
      <BannerSubtitle>디미고 온라인 건의함 서비스</BannerSubtitle>
      <BannerDescription>지금 바로 학교를 변화시켜보세요.</BannerDescription>
    </Banner>

    <LoginSection>
      <LoginForm>
        <LoginLabel>
          Dimigo ID
          <LoginTextInput type="text" />
        </LoginLabel>

        <LoginLabel>
          Dimigo Password
          <LoginTextInput type="password" />
        </LoginLabel>
      </LoginForm>
    </LoginSection>
  </Container>
);

export default LoginPage;