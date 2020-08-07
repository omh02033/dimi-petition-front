import React from 'react';
import styled from 'styled-components';

import colors from 'assets/colors';
import devices from 'assets/devices';

import 'assets/styles/LoginForm.scss';

const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 50%;

  @media ${devices.mobileL} {
    width: 70%;
  }
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
  padding: 0.7rem;
  margin-top: 0.5rem;

  outline: none;
`;

const Submit = styled.input`
  padding: 0.7rem 0;

  border-radius: 5px;
  border: none;

  background-color: ${colors.main};
  color: white;
  font-size: 1.1rem;
  cursor: pointer;

  margin-top: 3rem;
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

    <div className="pretty p-default p-curve">
      <input type="checkbox" />
      <div className="state p-primary-o">
        <label>Remember me</label>
      </div>
    </div>

    <Submit type="submit" value="로그인" />
  </Form>
);

export default LoginForm;