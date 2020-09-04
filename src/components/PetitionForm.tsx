import React, { useState } from 'react';
import styled from 'styled-components';

import {TextInput} from 'assets/styles/BasicComponent';
import CategorySelect from 'components/CategorySelect';
import LinkList from 'components/LinkList';
import Category from 'data/Category';

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

const TitleInput = styled(TextInput)``;

const ContentInput = styled.textarea`
  border: 1px solid #D9D9D9;
  font-size: 1.1rem;
  padding: 0.8rem 0.8rem;
  resize: none;
`;

const PetitionForm = () => {
  const [links, setLinks] = useState<Array<string>>([]);
  const [category, setCategory] = useState<Category | null>(null);

  return (
    <Form>
      <Control>
        <Label htmlFor="title">청원제목</Label>
        <TitleInput placeholder="청원 제목을 입력하세요." type="text" id="title" />
      </Control>

      <Control>
        <Label>분야(카테고리)</Label>
        <CategorySelect onChangeSelect={setCategory}/>
      </Control>

      <Control>
        <Label htmlFor="content">청원내용</Label>
        <ContentInput placeholder="청원 내용을 입력하세요." id="content" rows={15}/>
      </Control>

      <Control>
        <Label htmlFor="links">관련 링크</Label>
        <LinkList initialLinks={[]} onChangeLinks={setLinks}/>
      </Control>
    </Form>
  )
};

export default PetitionForm;
