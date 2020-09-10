import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { TextInput } from "assets/styles/BasicComponent";
import CategorySelect from "components/CategorySelect";
import LinkList from "components/LinkList";
import Category, { getCategoryId } from "data/Category";
import ButtonPair from "components/ButtonPair";

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
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.1rem;

  border: 1px solid #d9d9d9;
  padding: 0.8rem 0.8rem;
  resize: none;
`;

const SubmitContainer = styled.div`
  border-top: 1px solid #d9d9d9;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 2rem 0 4rem 0;
  padding-top: 2rem;
`;

const PetitionForm = () => {
  const history = useHistory();

  const onCancel = () => {
    history.push("/");
    window.scrollTo(0, 0);
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [links, setLinks] = useState<string[]>([]);
  const [category, setCategory] = useState<Category>(Category.Safety);

  const onSubmit = async () => {
    if (title.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "오류",
        text: "청원 제목이 비어있습니다.",
      });
      return;
    } else if (content.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "오류",
        text: "청원 내용이 비어있습니다.",
      });
      return;
    }

    const response = await axios.post("/petitions", {
      title: title,
      content: content,
      relatedUrls: links,
      category: getCategoryId(category),
    });

    if (response.data.status === 200) {
      await Swal.fire({
        icon: "success",
        title: "성공",
        text: "청원을 등록하였습니다.",
      });
      history.push('/petition/' + response.data._id);
    } else {
      Swal.fire({
        icon: "error",
        title: "오류",
        text: "청원 등록에 오류가 발생하였습니다.",
      });
    }
  };

  return (
    <Form>
      <Control>
        <Label htmlFor="title">청원제목</Label>
        <TitleInput
          type="text"
          placeholder="청원 제목을 입력하세요."
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Control>

      <Control>
        <Label>분야(카테고리)</Label>
        <CategorySelect
          onChangeSelect={(c) => setCategory(c!)}
          includeGeneral={false}
        />
      </Control>

      <Control>
        <Label htmlFor="content">청원내용</Label>
        <ContentInput
          id="content"
          placeholder="청원 내용을 입력하세요."
          rows={15}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Control>

      <Control>
        <Label htmlFor="links">관련 링크</Label>
        <LinkList initialLinks={[]} onChangeLinks={setLinks} />
      </Control>

      <SubmitContainer>
        <ButtonPair
          leftText="작성 취소"
          rightText="작성 완료"
          onClickLeft={onCancel}
          onClickRight={onSubmit}
        />
      </SubmitContainer>
    </Form>
  );
};

export default PetitionForm;
