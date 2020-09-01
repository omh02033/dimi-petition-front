import React from 'react';
import styled from 'styled-components';

import ComponentTitle from 'components/ComponentTitle';
import {PrimaryButton} from 'assets/styles/Buttons';

const Container = styled.article`
  margin-bottom: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: 60px;
  width: 60px;
  padding: 20px;
`;

const StepNumber = styled.div`
  margin-top: 0.5rem;
`;

const StepTitle = styled.h2`
  margin: 0.3rem 0 0 0;
  font-size: 1.1rem;
`;

const RegisterButton = styled(PrimaryButton)`
  padding: 0.6rem 4rem;
`;

function PetitionSteps() {
  const stepTitles = ["청원 작성", "청원 동의", "청원 접수", "의견 전달", "청원 답변"]
  return (
    <Container>
      <ComponentTitle>
        청원 방법
      </ComponentTitle>

      <StepsList>
        {
          stepTitles.map((title, i) => (
            <StepItem key={i}>
              <StepImage width="120" height="120" alt={title} src={"/steps/" + (i + 1) + ".svg"} />
              <StepNumber>0{i + 1}</StepNumber>
              <StepTitle>{title}</StepTitle>
            </StepItem>
          ))
        }
      </StepsList>
      <RegisterButton type="button" value="지금 청원하기"/>
    </Container>
  );

}

export default PetitionSteps;
