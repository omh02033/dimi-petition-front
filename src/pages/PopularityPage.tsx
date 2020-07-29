import React from 'react';

import CategorySelect from 'components/CategorySelect';
import PetitionStatus from 'components/PetitionStatus';
import PetitionList from 'components/PetitionList';
import ComponentTitle from 'components/ComponentTitle';

const PopularityPage = () => (
  <>
    <PetitionStatus />

    <ComponentTitle>청원 추천순 보기</ComponentTitle>
    <CategorySelect />

    <PetitionList title="진행중인 청원" perPage={5} />
    <PetitionList title="답변 대기 중인 청원" perPage={5} />
  </>
);

export default PopularityPage;
