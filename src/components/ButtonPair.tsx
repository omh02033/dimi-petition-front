import React from 'react';
import styled from 'styled-components';

import {PrimaryButton, SecondaryButton} from 'assets/styles/BasicComponent';

interface ButtonPairProps {
  onClickLeft: () => void;
  onClickRight: () => void;
  leftText: string;
  rightText: string;
};

const ButtonLeft = styled(SecondaryButton)`
  width: 8.5rem;
  padding: 0.9rem 0;

  margin-right: 0.5rem;
`;

const ButtonRight = styled(PrimaryButton)`
  width: 8.5rem;
  padding: 0.9rem 0;
`;


const ButtonPair = ({onClickLeft, onClickRight, leftText, rightText}: ButtonPairProps) => (
  <div>
      <ButtonLeft type="button" onClick={onClickLeft} value={leftText}/>
      <ButtonRight type="button" onClick={onClickRight} value={rightText}/>
  </div>
);

export default ButtonPair;
