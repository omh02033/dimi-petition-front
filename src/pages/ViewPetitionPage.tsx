import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import dayjs from "dayjs";
import Swal from "sweetalert2";

import ComponentTitle from "components/ComponentTitle";
import PetitionData, { statusToString } from "data/PetitionData";
import LoadingPage from "./LoadingPage";
import ButtonPair from "components/ButtonPair";
import colors from "assets/colors";

const TitleContainer = styled.div`
  padding: 3rem 0 2rem 0;
`;

const PetitionTitle = styled.h1`
  color: ${colors.textMain};
  font-size: 1.7rem;
  text-align: center;
`;

const PetitionLikes = styled.small`
  font-size: 1.1rem;
`;

const Highlight = styled.span`
  color: ${colors.main};
`;

const InfoList = styled.ul`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 3rem 0;
  padding: 1rem 1rem;

  box-sizing: border-box;
  list-style-type: none;
  border: 1px solid #d9d9d9;
`;

const InfoItem = styled.li`
  white-space: nowrap;

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  margin: 0.2rem 0.7rem;
`;

const InfoTitle = styled.p`
  white-space: nowrap;

  display: inline-block;
  margin: 0;
  margin-right: 2rem;
`;

const Control = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-bottom: 3rem;
`;

const Subtitle = styled.h2`
  font-weight: bold;
  font-size: 1.3rem;

  margin: 0.5rem 0;
`;

const ContentArea = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.1rem;
  white-space: pre-wrap;

  border: 1px solid #d9d9d9;
  padding: 1.5rem;
  line-height: 2rem;
`;

const AnswerContentArea = styled(ContentArea)`
  background-color: #fff3fa;
  border-color: ${colors.main};
`;

const ContentInput = styled.textarea`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.1rem;

  border: 1px solid #d9d9d9;
  margin: 1rem 0;
  padding: 0.8rem 0.8rem;
  resize: none;
`;

const LinkList = styled.ul``;

const LinkItem = styled.li`
  font-size: 1.2rem;
  word-break: break-word;
`;

interface ViewPetitionPageProps {
  match: any;
  isManager: boolean;
}

const ViewPetitionPage = ({ match, isManager }: ViewPetitionPageProps) => {
  const { id } = match.params;
  const [petition, setPetition] = useState<PetitionData | null>(null);
  const [agree, setAgree] = useState(false);
  const [answerContent, setAnswerContent] = useState("");
  const history = useHistory();

  const fetch = useCallback(async () => {
    const response = await axios.get("/petitions/" + id);
    const data = response.data.petition;

    setPetition({
      id: id,
      title: data.title,
      content: data.content,
      links: data.relatedUrls,
      category: data.category,
      status: data.status,
      likes: data.likesLength,
      createdAt: dayjs(data.createdAt),
      until: dayjs(data.until),
      answer: data.answer ? data.answer.content : null,
    });

    setAgree(data.me?.like);
  }, [id]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  if (!petition) return <LoadingPage />;

  const onCancel = () => {
    window.scrollTo(0, 0);
    history.push("/");
  };

  const onAgree = async () => {
    const result = await Swal.fire({
      title: "확인",
      text: "이 청원에 동의하시겠습니까? 한 번 동의한 청원은 취소가 불가능합니다!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: colors.main,
      cancelButtonColor: "#d9d9d9",
      confirmButtonText: "네",
      cancelButtonText: "취소",
    });

    if (result.isConfirmed) {
      const res = await axios.post("/petitions/" + id + "/like");
      await fetch();

      if (res.data.status === 200) {
        Swal.fire({
          title: "성공",
          text: "청원에 동의했습니다.",
          icon: "success",
          confirmButtonText: "네",
        });
      } else {
        Swal.fire({
          title: "오류",
          text: "청원 동의에 오류가 발생했습니다.",
          icon: "error",
          confirmButtonText: "네",
        });
        console.log(res);
      }
    }
  };

  const onAnswer = async () => {
    const result = await Swal.fire({
      title: "확인",
      text: "이 청원에 답변하시겠습니까?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: colors.main,
      cancelButtonColor: "#d9d9d9",
      confirmButtonText: "네",
      cancelButtonText: "취소",
    });

    if (result.isConfirmed) {
      const answerTitle = "'" + petition.title + "'에 대한 답변입니다.";
      const result = await axios.post("/petitions/" + id + "/answer", {
        title: answerTitle,
        content: answerContent,
      });

      if (result.data.status === 200) {
        await Swal.fire({
          title: "성공",
          text: "청원 답변이 완료되었습니다.",
          icon: "success",
          confirmButtonColor: colors.main,
          confirmButtonText: "확인",
        });

        window.location.reload(false);
      } else {
        console.log(result);
        let errorMessage;
        switch (result.data.status) {
          case 423:
            errorMessage = "답변 대기 중인 청원이 아닙니다.";
            break;
          default:
            errorMessage = "답변에 오류가 발생했습니다.";
            break;
        }

        Swal.fire({
          title: "오류",
          text: errorMessage,
          icon: "error",
          confirmButtonColor: colors.main,
          confirmButtonText: "확인",
        });
      }
    }
  };

  const categoryName: any = petition.category;
  return (
    <>
      <TitleContainer>
        <ComponentTitle>{statusToString(petition.status)}</ComponentTitle>
      </TitleContainer>
      <PetitionTitle>{petition.title}</PetitionTitle>
      <PetitionLikes>
        참여인원 : [ <Highlight>{petition.likes}</Highlight>명 ]
      </PetitionLikes>

      <InfoList>
        <InfoItem>
          <InfoTitle>청원일</InfoTitle>
          <Highlight>{petition.createdAt.format("YYYY.MM.DD")}</Highlight>
        </InfoItem>
        <InfoItem>
          <InfoTitle>마감일</InfoTitle>
          <Highlight>{petition.until?.format("YYYY.MM.DD")}</Highlight>
        </InfoItem>
        <InfoItem>
          <InfoTitle>청원 분류</InfoTitle>
          <Highlight>{categoryName.name}</Highlight>
        </InfoItem>
      </InfoList>

      {petition.answer && (
        <Control>
          <Subtitle>청원 답변</Subtitle>
          <AnswerContentArea>{petition.answer}</AnswerContentArea>
        </Control>
      )}

      <Control>
        <Subtitle>청원 내용</Subtitle>
        <ContentArea>{petition.content}</ContentArea>
      </Control>

      {petition.links!.length !== 0 && (
        <Control>
          <Subtitle>관련 링크</Subtitle>
          <LinkList>
            {petition.links!.map((link, i) => (
              <LinkItem key={i}>
                <a href={link}>{link}</a>
              </LinkItem>
            ))}
          </LinkList>
        </Control>
      )}

      {!petition.answer && isManager && (
        <Control>
          <Subtitle>답변 내용</Subtitle>
          <ContentInput
            placeholder="청원 답변을 입력하세요."
            rows={15}
            value={answerContent}
            onChange={(e) => setAnswerContent(e.target.value)}
          />
        </Control>
      )}
      {isManager && petition.status === "p" && (
        <ButtonPair
          onClickLeft={onCancel}
          onClickRight={onAnswer}
          leftText="취소"
          rightText="답변하기"
        />
      )}
      {!isManager &&
        (petition.status === "p" || petition.status === "w") &&
        !agree && (
          <ButtonPair
            onClickLeft={onCancel}
            onClickRight={onAgree}
            leftText="취소"
            rightText="동의"
          />
        )}
    </>
  );
};

export default ViewPetitionPage;
