import React from 'react';
import styled from 'styled-components';

import colors from 'assets/colors';

const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 50%;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  
  margin-bottom: 1.2rem;

  color: ${colors.textMain};
`;

const TextInput = styled.input` 
  border: #D9D9D9 solid 1px;
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 0.7rem 0.7rem;
  margin-top: 0.5rem;

  outline: none;
`;

const LoginForm = () => (
  <Form>
    <Label>
      Dimigo ID
      <TextInput type="text" />
    </Label>

    <Label>
      Dimigo Password
      <TextInput type="password" />
    </Label>
  </Form>
);

export default LoginForm;