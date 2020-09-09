import { createContext } from "react";

import PetitionData from "data/PetitionData";

const PetitionContext = createContext({
  petitionData: Array<PetitionData>(),
  isAgreeRules: false,
  agree: () => {},
  fetchPetition: () => {},
});

export default PetitionContext;
