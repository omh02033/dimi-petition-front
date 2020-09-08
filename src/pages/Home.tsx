import React from 'react';

import PetitionStatus from 'components/PetitionStatus';
import PetitionSteps from 'components/PetitionSteps';
import PetitionList from 'components/PetitionList';
import {PetitionStatus as Status} from 'data/PetitionData';

const Home = () => {
  return (
    <>
      <PetitionStatus />
      <PetitionSteps />
      <PetitionList title="진행중인 청원" perPage={5} statusFilter={Status.Progress}/>
      <PetitionList title="답변 대기 중인 청원" perPage={5} statusFilter={Status.Waiting}/>
      <PetitionList title="만료된 청원" perPage={5} statusFilter={Status.Answered}/>
    </>
  );
};

export default Home;
