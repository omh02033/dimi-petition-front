import React from 'react';
import styled from 'styled-components';

import devices from 'assets/devices';

const List = styled.ul`
  padding: 0;
  list-style-type: none;

  display: flex;
  justify-content: center;

  width: 75%;
  margin: 0 auto;

  @media ${devices.tablet} {
    width: 100%;
  }
`;

const ItemContainer = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.div`
  text-align: center;
`;

const ItemIcon = styled.img`
  height: 3rem;
  width: 3rem;

  @media ${devices.tablet} {
    height: 2.5rem;
    width: 2.5rem;
  }
`;

const ItemTitle = styled.div`
  margin-top: 0.7rem;
  font-size: 1.1rem;
  color: #B8B8B8;

  word-break: keep-all;

  @media ${devices.tablet} {
    font-size: 1rem;
  }
`;

const CategorySelect = () => {
  const itemList = [
    { title: "전체", imageSrc: "/category/general.svg" },
    { title: "안전", imageSrc: "/category/safety.svg" },
    { title: "인권", imageSrc: "/category/human-rights.svg" },
    { title: "생활", imageSrc: "/category/life.svg" },
    { title: "기숙사", imageSrc: "/category/dormitory.svg" },
  ]

  return (
    <List>
      {
        itemList.map((item) => (
          <ItemContainer key={item.title}>
            <Item>
              <ItemIcon src={item.imageSrc} />
              <ItemTitle>{item.title}</ItemTitle>
            </Item>
          </ItemContainer>
        ))
      }
    </List>
  );
};

export default CategorySelect;