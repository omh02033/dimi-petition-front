import React from 'react';
import styled from 'styled-components';

import colors from 'assets/colors';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.5rem; 
  border-top: 3px solid ${colors.main};
  padding-top: 1rem;
`;

const StepsList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  list-style-type: none;
  padding: 0;
  margin: 2rem 0 3.5rem 0;
`;

const StepItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 1rem;
`;

const StepImage = styled.img`
  border: 1px solid ${colors.main};
`;

const StepNumber = styled.div`
  margin-top: 1rem;
`;

const StepTitle = styled.h2`
  margin: 0.3rem 0 0 0;
  font-size: 1.1rem;
`;

const RegisterButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${colors.main};
  color: white;
  font-size: 1.1rem;
  padding: 0.6rem 4rem;

  cursor: pointer;
`;

function PetitionSteps() {
  const stepTitles = ["청원 작성", "청원 동의", "청원 접수", "의견 전달", "청원 답변"]
  return (
    <Container>
      <Title>청원 방법</Title>
      <StepsList>
        {
          stepTitles.map((title, i) => (
            <StepItem>
              <StepImage width="150" height="150" alt={title} />
              <StepNumber>0{i + 1}</StepNumber>
              <StepTitle>{title}</StepTitle>
            </StepItem>
          ))
        }
      </StepsList>
      <RegisterButton>지금 청원하기</RegisterButton>
    </Container>
  );

}

export default PetitionSteps;
