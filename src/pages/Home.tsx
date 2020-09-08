import React from 'react';

import PetitionStatus from 'components/PetitionStatus';
import PetitionSteps from 'components/PetitionSteps';
import PetitionList from 'components/PetitionList';

const Home = () => {
  return (
    <>
      <PetitionStatus />
      <PetitionSteps />
      <PetitionList title="진행중인 청원" perPage={5} />
      <PetitionList title="답변 대기 중인 청원" perPage={5} />
      <PetitionList title="만료된 청원" perPage={5} />
    </>
  );
};

export default Home;
