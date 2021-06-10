import React, { useState } from "react";
import { Redirect, Router, Switch, Route, useLocation } from "react-router-dom";
import history from "./history";

import styled from "styled-components";

import devices from "assets/devices";

import NavBar from "components/layouts/NavBar";
import Banner from "components/layouts/Banner";
import Footer from "components/layouts/Footer";

import Home from "pages/Home";
import CategoryPage from "pages/CategoryPage";
import PopularityPage from "pages/PopularityPage";
import AnsweredPage from "pages/AnsweredPage";
import LoginPage from "pages/LoginPage";
import RulesPageContainer from "pages/RulesPageContainer";
import PetitionPageContainer from "pages/PetitionPageContainer";
import ViewPetitionPage from "pages/ViewPetitionPage";
import UserData from "data/UserData";
import ScrollToTop from "./ScrollToTop";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto 4rem auto;
  width: 50%;

  @media ${devices.laptopL} {
    width: 80%;
  }

  @media ${devices.laptop} {
    width: 90%;
  }
`;

const HideIfLogin = ({ children, authenticated }: any) => {
  const location = useLocation();
  if (location.pathname.startsWith("/login") || !authenticated) {
    return null;
  }

  return children;
};

const Root = () => {
  const rawUserData = window.localStorage.getItem("user_data");
  const [userData, setUserData] = useState<UserData | null>(
    rawUserData ? JSON.parse(rawUserData) : null
  );
  const auth = userData !== null;

  const onLogin = (data: UserData) => {
    window.localStorage.setItem("user_data", JSON.stringify(data));
    setUserData(data);
  };

  const AuthRoute = ({ component: Component, ...rest }: any) => {
    const location = history.location.pathname;
    const param = location === "/" ? "" : `?next=${location}`;

    return (
      <Route
        {...rest}
        render={(props) =>
          auth ? (
            <Component {...props} isManager={userData!.manager} />
          ) : (
            <Redirect to={`/login${param}`} />
          )
        }
      />
    );
  };

  return (
    <Router history={history}>
      <ScrollToTop />

      <HideIfLogin authenticated={auth}>
        <NavBar userData={userData!} />
        <Banner />
      </HideIfLogin>

      <Container>
        <Switch>
          <Route
            path="/login"
            exact
            render={() => <LoginPage onLogin={onLogin} />}
          />

          <AuthRoute path="/" exact component={Home} />
          <AuthRoute path="/category" exact component={CategoryPage} />
          <AuthRoute path="/popularity" exact component={PopularityPage} />
          <AuthRoute path="/answered" exact component={AnsweredPage} />
          <AuthRoute path="/rules" exact component={RulesPageContainer} />
          <AuthRoute path="/petition/:id" exact component={ViewPetitionPage} />
          <AuthRoute path="/petition" exact component={PetitionPageContainer} />
        </Switch>
      </Container>

      <HideIfLogin authenticated={auth}>
        <Footer />
      </HideIfLogin>
    </Router>
  );
};

export default Root;
