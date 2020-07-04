import React from 'react';

import NavBar from 'components/NavBar';
import Banner from 'components/Banner';
import PetitionStatus from 'components/PetitionStatus';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <PetitionStatus />
    </div>
  );
}

export default App;
