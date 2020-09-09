import React, { useState } from "react";
import dayjs from "dayjs";
import axios from "axios";

import PetitionContext from "../contexts/PetitionContext";
import PetitionData from "data/PetitionData";

const PetitionProvider = ({ children }: any) => {
  const agree = () => {
    setState((prev) => ({
      ...prev,
      isAgreeRules: true,
    }));
  };

  const fetchPetition = async () => {
    const result = await axios.get("/petitions/");
    console.log(result);
    if (result.data.status === 401) return;
    const resToPetition = ({
      _id,
      title,
      likesLength,
      createdAt,
      category,
      status,
    }: any) => ({
      id: _id,
      title,
      likes: likesLength,
      createdAt: dayjs(createdAt),
      category: category.name,
      status: status,
    });

    setState((prev) => ({
      ...prev,
      petitionData: result.data.petitions.map(resToPetition),
    }));
  };

  const initialState = {
    isAgreeRules: false,
    petitionData: Array<PetitionData>(),
    agree,
    fetchPetition,
  };

  const [state, setState] = useState(initialState);

  return (
    <PetitionContext.Provider value={state}>
      {children}
    </PetitionContext.Provider>
  );
};

export default PetitionProvider;
