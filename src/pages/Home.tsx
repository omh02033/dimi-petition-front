import React from 'react';
import styled from 'styled-components';

import devices from 'assets/devices';

import NavBar from 'components/NavBar';
import Banner from 'components/Banner';
import PetitionStatus from 'components/PetitionStatus';
import PetitionSteps from 'components/PetitionSteps';

const Container = styled.div`
  margin: 0 auto;
  width: 50%;

  @media ${devices.laptopL} {
    width: 80%;
  }

  @media ${devices.laptop} {
    width: 90%;
  }
`;

function Home() {
  return (
    <main>
      <NavBar />
      <Banner />
      <Container>
        <PetitionStatus />
        <PetitionSteps />
      </Container>
    </main>
  );
}

export default Home;