import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import colors from 'assets/colors';
import devices from 'assets/devices';
import {PrimaryButton} from 'assets/styles/BasicComponent';

import 'assets/styles/LoginForm.scss';

export interface LoginData {
  status: number;
  name: string;
  grade: number;
  class: number;
}

export interface LoginFormProps {
  onLogin: (data: LoginData) => void;
};

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

const Submit = styled(PrimaryButton)`
  margin-top: 3rem;
`;


const LoginForm = ({onLogin}: LoginFormProps) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loginData = {username: id, password: password};
    const respond = await axios.post('/users/login', loginData);
    if (respond.data.status === 200) onLogin(respond.data);
    else console.error('로그인 실패');
  };

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        Dimigo ID
        <TextInput type="text" value={id} onChange={(e) => setId(e.target.value)}/>
      </Label>

      <Label>
        Dimigo Password
        <TextInput type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
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
};

export default LoginForm;
