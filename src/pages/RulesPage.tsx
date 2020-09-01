import React, {useState} from 'react';
import styled from 'styled-components';

import ComponentTitle from 'components/ComponentTitle';
import RuleBox from 'components/RuleBox';


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
  border-top: 2px solid #D9D9D9; 

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  
  margin-top: 2rem;
  padding: 1rem 0;
`;

const AgreeAllText = styled.p`
`;

const WarningBox = styled.div`
  margin-top: 1.5rem;

  background-color: #ECECEC;
  width: 100%;
  border-radius: 2px;
  text-align: center;
  padding: 1rem 2rem;
  box-sizing: border-box;
`;

const SubmitBox = styled.div`
  border-top: 2px solid black; 
`;

const RulesPage = () => {
  const agreeData = [
    { title: "디미청원 운영규칙", content: "디미청원은 사상과 표현의 다양성을 존중합니다. 동시에 타인의 권리를 침해하거나 명예를 훼손하는 내용은 제한합니다. 자극적이고 혐오스러운 내용, 비속어, 폭력적 내용, 특정 대상을 비하하거나 차별을 조장하는 내용, 개인정보 유출을 비롯해 타인의 권리를 침해하는 내용, 반복되는 내용, 허위사실 등은 삭제 및 학생부에 회부될 수 있습니다." },
    { title: "청원 답변이 숨김, 삭제 처리된 경우", content: "동일한 내용으로 중복 게시된 청원은 최초 1개만 남기고 '숨김'처리 또는 삭제될 수 있습니다. 욕설 및 비속어를 사용한 청원은 관리자에 의해 삭제 또는 일부 내용 '숨김'처리될 수 있습니다. 폭력적, 선정적, 쪼는 측정 집단에 대한 혐오 표현 등 유해한 내용을 담은 청원은 관리자에 의해 삭제될 수 있습니다. 개인정보, 허위사실, 타인의 명예를 훼손하는 내용이 포함된 청원은 관리자에 의해 삭제 또는 일부 내용 '숨김'처리될 수 있습니다." },
    { title: "청원 답변이 어려운 경우", content: "학교의 역할과 책임 범위를 벗어난 경우 답변이 어려울 수 있습니다. 인종, 국적, 종교, 나이, 지역, 장애, 성별 등 특성과 관련 있는 개인, 집단에 대한 차별 및 비하 등의 내용이 포함된 청원과 청원 주요 내용이 허위사실로 밝혀진 경우 답변이 어려울 수 있습니다." },
    { title: "답변 전달 기준", content: "청원 작성 후 외부에 공개되기 시작한 시간으로부터 7일 내에 기준 만족 시 동의 70개 이상인 경우 기준 만족, 동의하지 않습니다 개수가 동의합니다 개수의 반을 넘었을 경우 이 점도 반영하여 전달합니다." },
    { title: "답변 전달 사항", content: "교장선생님께 청원 내용 전달되며, 기준을 만족한 청원이 생긴 익일 아침시간을 기준으로 합니다. 답변은 학생회 페이지 사용 + 디미청원 사이트 공지되며 요약본과 전문을 합쳐서 올립니다." },
  ];

  const [checkedList, setCheckedList] = useState<Array<boolean | null>>(Array(agreeData.length).fill(null));
  const allAgreed = checkedList.every((x) => x);

  return (
    <>
      <TitleContainer>
        <ComponentTitle>
          디미청원 시행규칙
        </ComponentTitle>
      </TitleContainer>

      <RuleList>
        {
          agreeData.map((data, i) => (
            <li>
              <RuleBox 
                title={data.title} 
                content={data.content} 
                groupName={"agree" + i} 
                isAgree={checkedList[i]}
                onChangeSelect={(isAgree) => {
                  setCheckedList(checkedList.map((item, index) => (index === i ? isAgree : item)))
                }}
              />
            </li>
          ))
        }
      </RuleList>

      <AgreeAll>
        <AgreeAllText>시행규칙에 모두 동의하십니까?</AgreeAllText>
        <div>
          <div className="pretty p-default p-round">
            <input type="radio" name="agree-all" checked={allAgreed} onChange={() => setCheckedList(Array(agreeData.length).fill(true))}/>
            <div className="state p-primary-o">
              <label>모두 동의</label>
            </div>
          </div>
          <div className="pretty p-default p-round" style={{marginRight: 0}}>
            <input type="radio" name="agree-all" checked={!allAgreed} onChange={() => setCheckedList(Array(agreeData.length).fill(null))}/>
            <div className="state p-primary-o">
              <label>동의하지 않음</label>
            </div>
          </div>
        </div>
      </AgreeAll>

      <WarningBox>
        위 안내글을 모두 숙지했으며,<br/>
        청원으로 인해 일어난 문제에 대한 처벌을 받는 것에 동의합니다.<br/>
        청원으로 인한 피해를 모두 보상할 것에 동의합니다.
      </WarningBox>

      <SubmitBox>
      </SubmitBox>
    </>
  )
};

export default RulesPage;
