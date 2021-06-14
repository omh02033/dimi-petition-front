import React from "react";
import styled from "styled-components";

import devices from "assets/devices";

const Container = styled.footer`
  background-color: #636363;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 0;
  margin-top: 3rem;
  color: white;
`;

const ContentContainer = styled.div`
  width: 50%;

  @media ${devices.laptopL} {
    width: 80%;
  }

  @media ${devices.laptop} {
    width: 90%;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.3rem;
`;

const Content = styled.p`
  font-size: 0.9rem;
`;

const Link = styled.a`
  color: white;

  margin-right: 0.5rem;
`;

const Footer = () => (
  <Container>
    <ContentContainer>
      <Title>한국디지털미디어고등학교 학생자치회 학생청원 홈페이지</Title>
      <hr />
      <Content>
        <Link href="https://drive.google.com/file/d/14-IusvkS2OkuHfvjpQKWhnztIh-NQcjg/view?usp=sharing">
          디미청원 운영규정
        </Link>
        <Link href="https://drive.google.com/file/d/1b_gpPnNmItSWO4uDFfrKuu6PNn-sMd7S/view?usp=sharing">
          개인정보처리방침
        </Link>
      </Content>
      <Content>
        경기도 안산시 단원구 사세충열로 94 한국디지털미디어고등학교 / 교무실 :
        (031)363-7800 / 행정실 : (031)363-7873 / 팩스 : (031)402-8363
      </Content>
      <Content>
        한국디지털미디어고등학교 학생자치회 학생청원 홈페이지 / 총괄 : 제19대
        학생자치회
      </Content>
      <hr />
      <Content>
        Copyright © 2021 Korea Digital Media High School. All Rights Reserved
      </Content>
    </ContentContainer>
  </Container>
);

export default Footer;
