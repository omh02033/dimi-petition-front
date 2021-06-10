import React from "react";
import history from "routers/history";
import styled from "styled-components";

import ComponentTitle from "components/ComponentTitle";
import PetitionForm from "components/PetitionForm";

interface PetitionPageProps {
  isAgree: boolean;
}

const TitleContainer = styled.div`
  padding: 2.5rem 0;
`;

const WarningBox = styled.article`
  border: 1px solid #d9d9d9;
  padding: 0.3rem 1.5rem;

  margin-bottom: 2rem;
`;

const WarningList = styled.ol`
  padding-left: 1.5rem;
`;

const WarningItem = styled.li`
  margin: 0.5rem 0;
`;

const PetitionPage = ({ isAgree }: PetitionPageProps) => {
  if (!isAgree) {
    history.push("/rules");
    return null;
  }

  return (
    <>
      <TitleContainer>
        <ComponentTitle>운영원칙 및 주의사항</ComponentTitle>
      </TitleContainer>

      <WarningBox>
        <WarningList>
          <WarningItem>
            한번 작성된 청원은 수정이나 삭제가 불가능합니다. 최초 청원 취지와
            다른 내용으로 변경되는 것을 방지하여 청원 참여자의 의견을 보호하기
            위한 조치입니다. (별도 삭제를 원하는 경우 관리자에게 연락)
          </WarningItem>
          <WarningItem>
            작성한 청원은 모두 익명으로 표시되지만 청원내용이 처벌 대상인 경우
            관리자는 예외적으로 실명 확인이 가능합니다.
          </WarningItem>
        </WarningList>
      </WarningBox>

      <TitleContainer>
        <ComponentTitle>청원 작성하기</ComponentTitle>
      </TitleContainer>

      <PetitionForm />
    </>
  );
};

export default PetitionPage;
