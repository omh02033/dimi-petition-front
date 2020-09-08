import React, {useState} from 'react';

import CategorySelect, {SelectContainer} from 'components/CategorySelect';
import PetitionStatus from 'components/PetitionStatus';
import PetitionList from 'components/PetitionList';
import ComponentTitle from 'components/ComponentTitle';

import Category from 'data/Category';

const PopularityPage = () => {
  const [filter, setFilter] = useState<Category>(Category.General);

  return (<>
    <PetitionStatus />

    <ComponentTitle>분야별 청원 답변 보기</ComponentTitle>
    <SelectContainer>
      <CategorySelect onChangeSelect={(c) => setFilter(c)} />
    </SelectContainer>

    <PetitionList title="전체" perPage={10} categoryFilter={filter} />
  </>);
};

export default PopularityPage;
