import React, { useState } from "react";

import CategorySelect, { SelectContainer } from "components/CategorySelect";
import PetitionStatus from "components/PetitionStatus";
import PetitionListContainer from "components/PetitionListContainer";
import ComponentTitle from "components/ComponentTitle";

import Category from "data/Category";
import { PetitionStatus as Status } from "data/PetitionData";

const AnsweredPage = () => {
  const [filter, setFilter] = useState<Category | null>(null);

  return (
    <>
      <PetitionStatus />

      <ComponentTitle>분야별 청원 답변 보기</ComponentTitle>
      <SelectContainer>
        <CategorySelect onChangeSelect={(c) => setFilter(c)} />
      </SelectContainer>

      <PetitionListContainer
        title="전체"
        perPage={10}
        categoryFilter={filter}
        statusFilter={Status.Answered}
      />
    </>
  );
};

export default AnsweredPage;
