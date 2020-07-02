import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LogoImage = styled.img`
  width: 3rem;
`;

function NavBar() {
  return (
    <Nav>
      <LogoImage src="/council-logo.png" />

    </Nav>
  );
}

export default NavBar;
