import React from 'react';

import CategorySelect from 'components/CategorySelect';
import PetitionStatus from 'components/PetitionStatus';
import PetitionList from 'components/PetitionList';
import ComponentTitle from 'components/ComponentTitle';

const PopularityPage = () => (
  <>
    <PetitionStatus />

    <ComponentTitle>분야별 청원 답변 보기</ComponentTitle>
    <CategorySelect />

    <PetitionList title="전체" perPage={10} />
  </>
);

export default PopularityPage;
