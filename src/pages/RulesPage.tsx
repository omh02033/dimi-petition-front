import React, { useState } from "react";
import history from "routers/history";
import styled from "styled-components";

import ComponentTitle from "components/ComponentTitle";
import RuleBox from "components/RuleBox";
import ButtonPair from "components/ButtonPair";
import rules from "assets/rules.json";

const TitleContainer = styled.div`
  padding: 3rem 0 2rem 0;
`;

const RuleList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const AgreeAll = styled.div`
  width: 100%;
  border-top: 2px solid #d9d9d9;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 2rem;
  padding: 1rem 0;
`;

const AgreeAllText = styled.p``;

const WarningBox = styled.div`
  margin-top: 1.5rem;

  background-color: #ececec;
  width: 100%;
  border-radius: 2px;
  text-align: center;
  padding: 1rem 2rem;
  box-sizing: border-box;
`;

const SubmitBox = styled.div`
  width: 100%;
  border-top: 2px solid black;

  margin-top: 2rem;
  padding: 2rem 0 5rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.1rem;
`;

interface RulesPageProps {
  setAgree: () => void;
}

const RulesPage = ({ setAgree }: RulesPageProps) => {
  const [checkedList, setCheckedList] = useState<Array<boolean | null>>(
    Array(rules.length).fill(null)
  );
  const [isError, setIsError] = useState(false);
  const allAgreed = checkedList.every((x) => x);

  const onCancel = () => {
    history.push("/");
    window.scrollTo(0, 0);
  };

  const onAgree = () => {
    if (allAgreed) {
      setAgree();

      window.scrollTo(0, 0);
      history.push("/petition");
    } else {
      setIsError(true);
    }
  };

  return (
    <>
      <TitleContainer>
        <ComponentTitle>디미청원 시행규칙</ComponentTitle>
      </TitleContainer>

      <RuleList>
        {rules.map((data, i) => (
          <li key={i}>
            <RuleBox
              title={data.title}
              content={data.content}
              groupName={"agree" + i}
              isAgree={checkedList[i]}
              onChangeSelect={(isAgree) => {
                setCheckedList(
                  checkedList.map((item, index) =>
                    index === i ? isAgree : item
                  )
                );
              }}
            />
          </li>
        ))}
      </RuleList>

      <AgreeAll>
        <AgreeAllText>시행규칙에 모두 동의하십니까?</AgreeAllText>
        <div>
          <div className="pretty p-default p-round">
            <input
              type="radio"
              name="agree-all"
              checked={allAgreed}
              onChange={() => setCheckedList(Array(rules.length).fill(true))}
            />
            <div className="state p-primary-o">
              <label>모두 동의</label>
            </div>
          </div>
          <div className="pretty p-default p-round" style={{ marginRight: 0 }}>
            <input
              type="radio"
              name="agree-all"
              checked={!allAgreed}
              onChange={() => setCheckedList(Array(rules.length).fill(null))}
            />
            <div className="state p-primary-o">
              <label>동의하지 않음</label>
            </div>
          </div>
        </div>
      </AgreeAll>

      <WarningBox>
        위 안내글을 모두 숙지했으며,
        <br />
        청원으로 인해 일어난 문제에 대한 처벌을 받는 것에 동의합니다.
        <br />
        청원으로 인한 피해를 모두 보상할 것에 동의합니다.
      </WarningBox>

      <SubmitBox>
        <ButtonPair
          leftText="취소"
          rightText="동의"
          onClickLeft={onCancel}
          onClickRight={onAgree}
        />

        {isError && <ErrorMessage>시행 규칙에 모두 동의해주세요.</ErrorMessage>}
      </SubmitBox>
    </>
  );
};

export default RulesPage;
