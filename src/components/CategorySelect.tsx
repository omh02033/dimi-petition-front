import React, { useState } from 'react';
import styled from 'styled-components';

import devices from 'assets/devices';
import colors from 'assets/colors';

const List = styled.ul`
  padding: 0;
  list-style-type: none;

  display: flex;
  justify-content: center;

  width: 75%;
  margin: 3.5rem auto 3rem auto;

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
  cursor: pointer;

  &.selected {
    img {
      filter: invert(29%) sepia(98%) saturate(7493%) hue-rotate(318deg) brightness(100%) contrast(108%);
    }

    div {
      color: ${colors.main};
    }
  }
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
  const [selectIndex, setSelectIndex] = useState(0);

  const itemList = [
    { title: "전체", imageSrc: "/category/general.svg" },
    { title: "안전", imageSrc: "/category/safety.svg" },
    { title: "인권", imageSrc: "/category/human-rights.svg" },
    { title: "생활", imageSrc: "/category/life.svg" },
    { title: "기숙사", imageSrc: "/category/dormitory.svg" },
  ]

  const onClickItem = (i: number) => {
    setSelectIndex(i);
  }

  return (
    <List>
      {
        itemList.map((item, i) => (
          <ItemContainer key={item.title}>
            <Item
              className={selectIndex === i ? "selected" : ""}
              onClick={() => onClickItem(i)}
            >
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