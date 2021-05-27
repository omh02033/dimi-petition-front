import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Swal from "sweetalert2";

import colors from "assets/colors";
import devices from "assets/devices";
import { PrimaryButton } from "assets/styles/BasicComponent";
import UserData from "data/UserData";

import "assets/styles/LoginForm.scss";

export interface LoginFormProps {
  onLogin: (data: UserData) => void;
}

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
  border: #d9d9d9 solid 1px;
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 0.7rem;
  margin-top: 0.5rem;

  outline: none;
`;

const Submit = styled(PrimaryButton)`
  margin-top: 3rem;
`;

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loginData = { username: id, password: password };
    const respond = await axios.post("/users/login", loginData);
    if (respond.data.status === 200) {
      const userData = {
        name: respond.data.name,
        gradeNumber: respond.data.grade,
        classNumber: respond.data.class,
        photo: respond.data.photo,
        manager: respond.data.manager,
      };

      onLogin(userData);
      history.push("/");
    } else {
      console.log(respond);
      Swal.fire({
        icon: "error",
        title: "오류",
        text: "아이디 또는 비밀번호가 올비르지 않습니다.",
      });
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        Dimigo ID
        <TextInput
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </Label>

      <Label>
        Dimigo Password
        <TextInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Label>

      <Submit type="submit" value="로그인" />
    </Form>
  );
};

export default LoginForm;
