import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "modules";
import PetitionList from "components/PetitionList";
import { getPetitions } from "modules/petition";

import Category from "data/Category";
import PetitionData, { PetitionStatus } from "data/PetitionData";

interface PetitionListContainerProps {
  title: String;
  perPage: number;
  categoryFilter: Category | null;
  statusFilter?: PetitionStatus;
  preprocess?: (p: PetitionData[]) => PetitionData[];
}

const PetitionListContainer = (props: PetitionListContainerProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPetitions());
  }, [dispatch]);

  const { petitionData } = useSelector((state: RootState) => ({
    petitionData: state.petitionData,
  }));

  return <PetitionList {...props} petitionData={petitionData} />;
};

PetitionListContainer.defaultProps = {
  categoryFilter: null,
};

export default PetitionListContainer;
