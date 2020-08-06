import React from 'react';
import styled from 'styled-components';

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
    </LoginSection>
  </Container>
);

export default LoginPage;