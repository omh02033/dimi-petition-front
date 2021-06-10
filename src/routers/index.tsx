import React, { useEffect } from "react";
import {
  Redirect,
  BrowserRouter,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

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
import useLocalStorage from "hooks/useLocalStorage";
import axios from "axios";

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
  const [userData, setUserData] = useLocalStorage<UserData | null>(
    "user_data",
    null
  );
  const auth = userData !== null;

  const onLogin = (data: UserData) => {
    setUserData(data);
  };

  const AuthRoute = ({ component: Component, ...rest }: any) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          auth ? (
            <Component {...props} isManager={userData!.manager} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  };

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default Root;
