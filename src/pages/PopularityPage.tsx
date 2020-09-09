import React, { useState } from "react";

import CategorySelect, { SelectContainer } from "components/CategorySelect";
import PetitionStatus from "components/PetitionStatus";
import PetitionList from "components/PetitionList";
import ComponentTitle from "components/ComponentTitle";

import Category from "data/Category";
import PetitionData, { PetitionStatus as Status } from "data/PetitionData";

const PopularityPage = () => {
  const [filter, setFilter] = useState<Category | null>(null);
  const sortByLike = (ps: PetitionData[]) =>
    ps.sort((a, b) => b.likes - a.likes);

  return (
    <>
      <PetitionStatus />

      <ComponentTitle>청원 추천순 보기</ComponentTitle>
      <SelectContainer>
        <CategorySelect onChangeSelect={setFilter} />
      </SelectContainer>

      <PetitionList
        title="진행중인 청원"
        perPage={8}
        categoryFilter={filter}
        statusFilter={Status.Progress}
        preprocess={sortByLike}
      />
      <PetitionList
        title="답변 대기 중인 청원"
        perPage={5}
        categoryFilter={filter}
        statusFilter={Status.Waiting}
        preprocess={sortByLike}
      />
    </>
  );
};

export default PopularityPage;
