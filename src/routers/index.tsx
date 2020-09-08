import React, {useContext, useEffect} from 'react';
import {useCookies} from 'react-cookie';
import {Redirect, BrowserRouter, Switch, Route, useLocation} from 'react-router-dom';

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
import UserData from 'data/UserData';
import PetitionContext from 'contexts/PetitionContext';

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

const HideIfLogin = ({children, authenticated}: any) => {
  const location = useLocation();
  if (location.pathname.startsWith('/login') || !authenticated) {
    return null;
  }

  return children;
}

const Root = () => {
  const [cookies, setCookie] = useCookies(['auth']);
  const authenticated = cookies.auth !== 'null' && cookies.auth !== undefined;
  const userData = authenticated ? cookies.auth : null;
  const {fetchPetition} = useContext(PetitionContext);

  useEffect(() => {
    fetchPetition();
  }, [fetchPetition]);

  const onLogin = (data: UserData) => {
    setCookie('auth', data, {maxAge: 43200});
    fetchPetition();
  };

  const AuthRoute = ({component: Component, ...rest}: any) => {
    return (
      <Route {...rest} render={props => (
        authenticated ?
          <Component {...props} />
          : <Redirect to="/login" />
      )} />
    );
  };

  return (
    <BrowserRouter>
      <HideIfLogin authenticated={authenticated}>
        <NavBar userData={userData}/>
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

      <HideIfLogin authenticated={authenticated}>
        <Footer />
      </HideIfLogin>
    </BrowserRouter>
  );
}

export default Root;
