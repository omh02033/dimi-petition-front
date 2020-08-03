import React, { useState } from 'react';

import CategorySelect from 'components/CategorySelect';
import PetitionStatus from 'components/PetitionStatus';
import PetitionList from 'components/PetitionList';
import ComponentTitle from 'components/ComponentTitle';

import Category from 'data/Category';

const PopularityPage = () => {
  const [filter, setFilter] = useState<Category | null>(null);

  return (<>
    <PetitionStatus />

    <ComponentTitle>청원 추천순 보기</ComponentTitle>
    <CategorySelect onChangeSelect={(c) => setFilter(c)} />

    <PetitionList title="진행중인 청원" perPage={8} categoryFilter={filter} />
    <PetitionList title="답변 대기 중인 청원" perPage={5} categoryFilter={filter} />
  </>);
};

export default PopularityPage;
