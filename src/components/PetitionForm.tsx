import React, { useState } from 'react';

import styled from 'styled-components';

import CategorySelect from 'components/CategorySelect';

const Form = styled.form`
  width: 100%;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 1.3rem;

  margin-bottom: 0.5rem;
`;

const Control = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 3rem;
`;

const TextInput = styled.input`
  border: 1px solid #D9D9D9;
  font-size: 1.3rem;
  padding: 0.8rem 0.8rem;
`;

const PetitionForm = () => {
  return (
    <Form>
      <Control>
        <Label htmlFor="title">청원제목</Label>
        <TextInput placeholder="청원 제목을 입력하세요." type="text" id="title" />
      </Control>

      <Control>
        <Label htmlFor="title">분야(카테고리)</Label>
        <CategorySelect />
      </Control>
    </Form>
  )
};

export default PetitionForm;