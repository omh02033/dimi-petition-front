import React from "react";
import { useDispatch } from "react-redux";

import RulesPage from "./RulesPage";
import { agreeRules } from "../modules/petition";

const RulesPageContainer = () => {
  const dispatch = useDispatch();
  const setAgree = () => {
    dispatch(agreeRules());
  };

  return <RulesPage setAgree={setAgree} />;
};

export default RulesPageContainer;
