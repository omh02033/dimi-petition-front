import React, { useState } from 'react';

import styled from 'styled-components';

import CategorySelect from 'components/CategorySelect';

const Form = styled.form`
  width: 100%;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 1.3rem;

  margin-bottom: 1rem;
`;

const Control = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 3rem;
`;

const TitleInput = styled.input`
  border: 1px solid #D9D9D9;
  font-size: 1.3rem;
  padding: 0.8rem 0.8rem;
`;

const ContentInput = styled.textarea`
  border: 1px solid #D9D9D9;
  font-size: 1.1rem;
  padding: 0.8rem 0.8rem;
  resize: none;
`;

const PetitionForm = () => {
  return (
    <Form>
      <Control>
        <Label htmlFor="title">청원제목</Label>
        <TitleInput placeholder="청원 제목을 입력하세요." type="text" id="title" />
      </Control>

      <Control>
        <Label>분야(카테고리)</Label>
        <CategorySelect />
      </Control>

      <Control>
        <Label htmlFor="content">청원내용</Label>
        <ContentInput placeholder="청원 내용을 입력하세요." id="content" rows={15}/>
      </Control>
    </Form>
  )
};

export default PetitionForm;
