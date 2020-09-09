import React, { useState } from "react";

import CategorySelect, { SelectContainer } from "components/CategorySelect";
import PetitionStatus from "components/PetitionStatus";
import PetitionList from "components/PetitionList";
import ComponentTitle from "components/ComponentTitle";

import Category from "data/Category";
import { PetitionStatus as Status } from "data/PetitionData";

const CategoryPage = () => {
  const [filter, setFilter] = useState<Category | null>(null);

  return (
    <>
      <PetitionStatus />

      <ComponentTitle>청원 분야별 보기</ComponentTitle>
      <SelectContainer>
        <CategorySelect onChangeSelect={setFilter} />
      </SelectContainer>

      <PetitionList
        title="진행중인 청원"
        perPage={8}
        categoryFilter={filter}
        statusFilter={Status.Progress}
      />
      <PetitionList
        title="답변 대기 중인 청원"
        perPage={5}
        categoryFilter={filter}
        statusFilter={Status.Waiting}
      />
    </>
  );
};

export default CategoryPage;
