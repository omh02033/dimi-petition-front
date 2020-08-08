import React from 'react';
import styled from 'styled-components';

import devices from 'assets/devices';

const Container = styled.section`
  width: 100%;
  height: 450px;

  background-image: url('/school.png');
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 2000px rgba(255, 0, 150, 0.3);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  color: white;

  width: 50%;

  @media ${devices.laptopL} {
    width: 80%;
  }

  @media ${devices.laptop} {
    width: 90%;
  }
`;

const Description = styled.p`
  margin: 0;
  font-size: 1.2rem;
`;

const MainHeading = styled.h1`
  font-size: 3rem;
  font-weight: normal;
  margin: 0.5rem 0 0.7rem 0;

  word-break: keep-all;
`;

function Banner() {
  return (
    <Container>
      <TextContainer>
        <Description>학생청원솔루션</Description>
        <MainHeading>
          디미고 온라인 건의함 서비스<br />
          <strong>디미청원</strong>
        </MainHeading>
        <Description>지금 바로 학교를 변화시켜보세요.</Description>
      </TextContainer>
    </Container>
  );
}

export default Banner;