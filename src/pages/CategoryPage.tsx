import React from 'react';

import CategorySelect from 'components/CategorySelect';
import PetitionStatus from 'components/PetitionStatus';
import PetitionList from 'components/PetitionList';
import ComponentTitle from 'components/ComponentTitle';

import Category from 'data/Category';

const CategoryPage = () => (
  <>
    <PetitionStatus />

    <ComponentTitle>청원 분야별 보기</ComponentTitle>
    <CategorySelect />

    <PetitionList title="진행중인 청원" perPage={8} />
    <PetitionList title="답변 대기 중인 청원" perPage={5} />
  </>
);

export default CategoryPage;
