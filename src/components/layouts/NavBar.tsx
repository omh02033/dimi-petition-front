import React from 'react';
import axios from 'axios';
import {useCookies} from 'react-cookie';
import {Link, useLocation} from 'react-router-dom';
import styled from 'styled-components';

import {FiLogOut} from 'react-icons/fi';

import colors from 'assets/colors';
import devices from 'assets/devices';
import UserData from 'data/UserData';


interface NavBarProps {
  userData: UserData;
};

const Nav = styled.nav`
  display: grid;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0;
  margin: 0 auto;

  grid-template-columns: 100px 1fr 160px;
  grid-template-rows: 1fr;

  width: 50%;

  @media ${devices.laptopL} {
    width: 80%;
  }

  @media ${devices.laptop} {
    width: 90%;
  }

  @media ${devices.tablet} {
    grid-template-columns: 100px 1fr;
    grid-template-rows: 1fr 90px;
    grid-gap: 1rem;

    padding: 1.5rem 0 0 0;
  }
`;

const LogoImage = styled.img`
  height: 2.3rem;
  margin: auto 0;

  cursor: pointer;

  @media ${devices.tablet} {
    grid-column: 1;
    grid-row: 1;
  }
`;

const MenuList = styled.ul`
  flex: 1;
  list-style-type: none;

  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 0;
  padding: 0;

  @media ${devices.tablet} {
    grid-column: 1/3;
    grid-row: 2;
  }
`;

const MenuListItem = styled.li`
  font-size: 1.1rem;
  height: 3.5rem;
  width: 8rem;

  text-align: center;
  word-break: keep-all;
  overflow: hidden;

  &:not(:last-child) {
    margin-right: 2rem;

    @media ${devices.tablet} {
      margin-right: 0.5rem;
    }
  }

  border-bottom: 3px solid transparent;
  transition: all 0.2s;

  cursor: pointer;

  &.current {
    border-bottom: 3px solid ${colors.main};

    a {
      color: ${colors.main};
    }
  }
`;

const MenuItemLink = styled(Link)`
  display: block;
  line-height: 3.5rem;

  color: ${colors.textMain};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${colors.main};
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;

  margin-left: auto;
  font-weight: bold;
  text-align: right;
  color: ${colors.textMain};

  @media ${devices.tablet} {
    grid-column: 2;
    grid-row: 1;
  }
`;

const UserImage = styled.img`
  border-radius: 50%;
  border: 1px solid #D9D9D9;

  object-fit: cover;
  width: 40px;
  height: 40px;
`;

const LogoutButton = styled.button`
  cursor: pointer;
  margin-left: 1rem;
  background: none;
  border: none;
  outline: none;
`;

const LogoutIcon = styled(FiLogOut)`
  color: #868e96;
  font-size: 1.4rem;
  margin-top: 3px;
`;

const NavBar = ({userData}: NavBarProps) => {
  const location = useLocation();
  const [, , removeCookie] = useCookies();
  const itemList = [
    {title: "분야별 청원", location: "/category/"},
    {title: "추천순 청원", location: "/popularity/"},
    {title: "답변된 청원", location: "/answered/"},
  ];

  const onLogout = () => {
    axios.post('/users/logout');
    removeCookie('auth');
    window.location.reload(false);
  };

  return (
    <Nav>
      <Link to="/">
        <LogoImage src="/council-logo-small.svg" />
      </Link>

      <MenuList>
        {
          itemList.map((item) => {
            const isCurrent = location.pathname === item.location;
            return (
              <MenuListItem
                key={item.title}
                className={isCurrent ? "current" : ""}
              >
                <MenuItemLink
                  to={item.location}
                >
                  {item.title}
                </MenuItemLink>
              </MenuListItem>
            );
          })
        }
      </MenuList>
      <Profile>
        <UserImage src={"https://api.dimigo.hs.kr/user_photo/" + userData.photo} />
        <LogoutButton onClick={onLogout}>
          <LogoutIcon />
        </LogoutButton>
      </Profile>
    </Nav>
  );
}

export default NavBar;
