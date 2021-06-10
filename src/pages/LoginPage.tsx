import React from "react";
import styled from "styled-components";

import LoginForm, { LoginFormProps } from "components/LoginForm";

import devices from "assets/devices";
import UserData from "data/UserData";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Banner = styled.section`
  flex: 1;

  background-image: url("/school-full.png");
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(255, 0, 150, 0.6);

  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${devices.laptop} {
    display: none;
  }
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

const Logo = styled.div`
  display: none;
  position: absolute;
  left: 50%;
  top: 0.5rem;
  transform: translateX(-50%);

  @media ${devices.laptop} {
    display: flex;
  }

  @media only screen and (max-height: 440px) {
    display: none;
  }
`;

const LogoImage = styled.img`
  width: 2.5rem;
`;

const LogoTitle = styled.h1`
  font-weight: normal;
  font-size: 1.2rem;
  margin-left: 0.6rem;
`;

const LoginSection = styled.section`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface LoginPageProps {
  onLogin: (data: UserData) => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  //if (authenticated) return <Redirect to="/" />;
  const nextPath = new URLSearchParams(window.location.search).get("next");

  return (
    <Container>
      <Banner>
        <img src="/council-logo-white.svg" alt="학생회 로고" />
        <BannerTitle>디미청원</BannerTitle>
        <BannerSubtitle>디미고 온라인 건의함 서비스</BannerSubtitle>
        <BannerDescription>지금 바로 학교를 변화시켜보세요.</BannerDescription>
      </Banner>

      <Logo>
        <LogoImage src="/council-logo-small.svg" alt="학생회 로고" />
        <LogoTitle>디미청원</LogoTitle>
      </Logo>

      <LoginSection>
        <LoginForm onLogin={onLogin} nextPath={nextPath || "/"} />
      </LoginSection>
    </Container>
  );
};

export default LoginPage;
