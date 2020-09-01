import React from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';

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

const HideIfLogin = ({ children }: any) => {
  const location = useLocation();
  if (location.pathname.startsWith('/login')) {
    return null;
  }

  return children;
}

const Root = () => (
  <BrowserRouter>
    <HideIfLogin>
      <NavBar />
      <Banner />
    </HideIfLogin>

    <Container>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category" exact component={CategoryPage} />
        <Route path="/popularity" exact component={PopularityPage} />
        <Route path="/answered" exact component={AnsweredPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/rules" exact component={RulesPage} />
      </Switch>
    </Container>

    <HideIfLogin>
      <Footer />
    </HideIfLogin>
  </BrowserRouter>
)

export default Root;
