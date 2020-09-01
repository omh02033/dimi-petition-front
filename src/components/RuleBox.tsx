import React from 'react';
import styled from 'styled-components';

import colors from 'assets/colors';

interface RuleBoxProps {
  title: string;
  content: string;
  groupName: string;
  isAgree: boolean | null;
  onChangeSelect: (isAgree: boolean) => void; 
}

const Container = styled.section`
  margin: 0.5rem 0;
`;

const Title = styled.h2`
  font-size: 1.3rem;
  color: ${colors.textMain};
`;

const Content = styled.p`
  border: 2px solid #D9D9D9;
  padding: 1rem;
  color: ${colors.textMain};
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AgreeText = styled.p`
  margin: 0 1rem 0 auto;
`;

const RuleBox = ({ title, content, groupName, onChangeSelect, isAgree }: RuleBoxProps) => (
  <Container>
    <Title>{title}</Title>
    <Content>{content}</Content>

    <InputContainer>
      <AgreeText>동의하십니까?</AgreeText>
      <div className="pretty p-default p-round">
        <input type="radio" name={groupName} checked={isAgree === true} onChange={() => onChangeSelect(true)}/>
        <div className="state p-primary-o">
          <label >예</label>
        </div>
      </div>
      <div className="pretty p-default p-round">
        <input type="radio" name={groupName} checked={isAgree === false} onChange={() => onChangeSelect(false)}/>
        <div className="state p-primary-o">
          <label>아니요</label>
        </div>
      </div>
    </InputContainer>
  </Container>
);

export default RuleBox;
