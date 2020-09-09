import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import dayjs from "dayjs";

import ComponentTitle from "components/ComponentTitle";
import PetitionData, { PetitionStatus } from "data/PetitionData";
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
  line-height: 1rem;
`;

const LinkList = styled.ul``;

const LinkItem = styled.li`
  font-size: 1.2rem;
`;

const ViewPetitionPage = ({ match }: any) => {
  const { id } = match.params;
  const [petition, setPetition] = useState<PetitionData | null>(null);

  useEffect(() => {
    async function fetch() {
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
    }

    fetch();
  }, [id]);

  if (!petition) return null;
  const statusToString = (status: PetitionStatus) => {
    switch (status) {
      case PetitionStatus.Progress:
        return "청원 진행 중";
      case PetitionStatus.Hided:
        return "가려진 청원";
      case PetitionStatus.Closed:
        return "닫힌 청원";
      case PetitionStatus.Waiting:
        return "답변 대기 중";
      case PetitionStatus.Deleted:
        return "삭제된 청원";
      case PetitionStatus.Reported:
        return "신고 접수된 청원";
      case PetitionStatus.Answered:
        return "답변된 청원";
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
    </>
  );
};

export default ViewPetitionPage;
