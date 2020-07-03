import React from 'react';
import styled from 'styled-components';

import colors from 'assets/colors';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;

`;

const LogoImage = styled.img`
  height: 2.3rem;
  margin: auto 8rem auto 0;
`;

const MenuList = styled.ul`
  list-style-type: none;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 0;
  padding: 0;
`;

const MenuListItem = styled.li`
  padding: 0.7rem 1.5rem;
  font-size: 1.1rem;

  margin-right: 2rem;

  border-bottom: 2px solid transparent;
  transition: all 0.2s;

  cursor: pointer;

  &:hover {
    border-bottom: 2px solid ${colors.main};
    color: ${colors.main};
  }
`;

function NavBar() {
  return (
    <Nav>
      <LogoImage src="/council-logo-small.svg" />
      <MenuList>
        <MenuListItem>분야별 청원</MenuListItem>
        <MenuListItem>추천순 청원</MenuListItem>
        <MenuListItem>답변된 청원</MenuListItem>
      </MenuList>

    </Nav>
  );
}

export default NavBar;
