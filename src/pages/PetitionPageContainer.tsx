import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "modules";

import PetitionPage from "./PetitionPage";

const PetitionPageContainer = () => {
  const isAgree = useSelector((state: RootState) => state.isAgree);

  return <PetitionPage isAgree={isAgree} />;
};

export default PetitionPageContainer;
