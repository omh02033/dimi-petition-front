import React from "react";

import PetitionStatus from "components/PetitionStatus";
import PetitionSteps from "components/PetitionSteps";
import PetitionListContainer from "components/PetitionListContainer";
import { PetitionStatus as Status } from "data/PetitionData";

const Home = () => {
  return (
    <>
      <PetitionStatus />
      <PetitionSteps />
      <PetitionListContainer
        title="진행중인 청원"
        perPage={5}
        statusFilter={Status.Progress}
      />
      <PetitionListContainer
        title="답변 대기 중인 청원"
        perPage={5}
        statusFilter={Status.Waiting}
      />
      <PetitionListContainer
        title="답변된 청원"
        perPage={5}
        statusFilter={Status.Answered}
      />
    </>
  );
};

export default Home;
