import React from 'react';
import styled from 'styled-components';

import colors from 'assets/colors';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 0;

  width: 50%;
  margin: 0 auto;
`;

const LogoImage = styled.img`
  height: 2.3rem;
  margin: auto 0;

  cursor: pointer;
`;

const MenuList = styled.ul`
  flex: 1;
  list-style-type: none;

  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 0;
  padding: 0;
`;

const MenuListItem = styled.li`
  padding: 0.7rem 1.5rem;
  font-size: 1.1rem;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  border-bottom: 2px solid transparent;
  transition: all 0.2s;

  cursor: pointer;

  &.current {
    border-bottom: 2px solid ${colors.main};
    color: ${colors.main};
  }
`;

const Profile = styled.div`
  text-align: center;
`;

function NavBar() {
  return (
    <Nav>
      <LogoImage src="/council-logo-small.svg" />
      <MenuList>
        <MenuListItem className="current">분야별 청원</MenuListItem>
        <MenuListItem>추천순 청원</MenuListItem>
        <MenuListItem>답변된 청원</MenuListItem>
      </MenuList>
      <Profile>
        1376 홍길동
      </Profile>
    </Nav>
  );
}

export default NavBar;
