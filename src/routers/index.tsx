import React, {useState} from 'react';
import {RouteProps, Redirect, BrowserRouter, Switch, Route, useLocation} from 'react-router-dom';

import styled from 'styled-components';

import devices from 'assets/devices';

import NavBar from 'components/layouts/NavBar';
import Banner from 'components/layouts/Banner';
import Footer from 'components/layouts/Footer';

import Home from 'pages/Home';
import CategoryPage from 'pages/CategoryPage';
import PopularityPage from 'pages/PopularityPage';
import AnsweredPage from 'pages/AnsweredPage';
import LoginPage from 'pages/LoginPage';
import RulesPage from 'pages/RulesPage';
import PetitionPage from 'pages/PetitionPage';
import {LoginData} from 'components/LoginForm';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  width: 50%;

  @media ${devices.laptopL} {
    width: 80%;
  }

  @media ${devices.laptop} {
    width: 90%;
  }
`;

const HideIfLogin = ({children}: any) => {
  const location = useLocation();
  if (location.pathname.startsWith('/login')) {
    return null;
  }

  return children;
}

const Root = () => {
  const [user, setUser] = useState<LoginData | null>(null);
  const authenticated = user !== null;

  const onLogin = (data: LoginData) => {
    console.log(data);
    setUser(data);
  };

  const AuthRoute = ({component: Component, ...rest}: any) => (
      <Route {...rest} render={props => (
        authenticated ?
          <Component {...props} />
          : <Redirect to="/login" />
      )} />
  );

  return (
    <BrowserRouter>
      <HideIfLogin>
        <NavBar />
        <Banner />
      </HideIfLogin>

      <Container>
        <Switch>
          <Route path="/login" exact render={() => <LoginPage onLogin={onLogin} authenticated={authenticated} />} />

          <AuthRoute path="/" exact component={Home} />
          <AuthRoute path="/category" exact component={CategoryPage} />
          <AuthRoute path="/popularity" exact component={PopularityPage} />
          <AuthRoute path="/answered" exact component={AnsweredPage} />
          <AuthRoute path="/rules" exact component={RulesPage} />
          <AuthRoute path="/petition" exact component={PetitionPage} />
        </Switch>
      </Container>

      <HideIfLogin>
        <Footer />
      </HideIfLogin>
    </BrowserRouter>
  );
}

export default Root;
