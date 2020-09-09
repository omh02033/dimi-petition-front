import React, { useState, useEffect, useCallback, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import dayjs from "dayjs";
import Swal from "sweetalert2";

import ComponentTitle from "components/ComponentTitle";
import PetitionData, { statusToString } from "data/PetitionData";
import ButtonPair from "components/ButtonPair";
import colors from "assets/colors";
import PetitionContext from "contexts/PetitionContext";

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

const LinkList = styled.ul``;

const LinkItem = styled.li`
  font-size: 1.2rem;
`;

const ViewPetitionPage = ({ match }: any) => {
  const { id } = match.params;
  const [petition, setPetition] = useState<PetitionData | null>(null);
  const [agree, setAgree] = useState(false);
  const { fetchPetition } = useContext(PetitionContext);
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
    });

    setAgree(data.me.like);
  }, [id]);

  useEffect(() => {
    console.log('effect');
    fetch();
  }, [fetch]);

  const onDisagree = () => {
    window.scrollTo(0, 0);
    history.push("/");
  };

  const onAgree = async () => {
    if (!agree) {
      const result = await Swal.fire({
        title: "확인",
        text: "이 청원에 동의하시겠습니까?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: colors.main,
        cancelButtonColor: "#d9d9d9",
        confirmButtonText: "네",
        cancelButtonText: "취소",
      });

      if (result.isConfirmed) {
        await axios.post("/petitions/" + id + "/like");
        await fetch();
        await fetchPetition();
        Swal.fire({
          title: "성공",
          text: "청원에 동의했습니다.",
          icon: "success",
        });

      }
    } else {
      const result = await Swal.fire({
        title: "확인",
        text: "이 청원에 동의를 취소하시겠습니까?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: colors.main,
        cancelButtonColor: "#d9d9d9",
        confirmButtonText: "네",
        cancelButtonText: "취소",
      });

      if (result.isConfirmed) {
        await axios.delete("/petitions/" + id + "/like");
        await fetch();
        await fetchPetition();

        Swal.fire({
          title: "성공",
          text: "청원 동의를 취소했습니다.",
          icon: "info",
        });

      }
    }
  };

  if (!petition) return null;
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

      <ButtonPair
        onClickLeft={onDisagree}
        onClickRight={onAgree}
        leftText="취소"
        rightText={agree ? "동의 취소" : "동의"}
      />
    </>
  );
};

export default ViewPetitionPage;
