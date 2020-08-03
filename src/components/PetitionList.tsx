import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

import dayjs from 'dayjs';
import colors from 'assets/colors';
import devices from 'assets/devices';

import PetitionData from 'data/PetitionData';
import Category, { categoryToString } from 'data/Category';

import './PetitionList.scss';

interface PetitionListProps {
  title: String;
  perPage: number;
  categoryFilter: Category | null;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 4rem;
`;

const Title = styled.h1`
  margin: 1.5rem 0;
  font-size: 1.4rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  border-top: 2px solid black;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #d9d9d9;
`;

const TableHeader = styled.th`
  font-size: 1.2rem;
  padding: 1rem 0;

  &:nth-child(1) {
    width: 120px;
  }

  &:nth-child(3), &:nth-child(4) {
    width: 100px;
  }

  @media ${devices.tablet} {
    &:nth-child(1), &:nth-child(3) {
      display: none;
    }
  }
`;

const TableCell = styled.td`
  font-size: 1.2rem;
  text-align: center;

  padding: 1rem 0;

  @media ${devices.tablet} {
    &:nth-child(1), &:nth-child(3) {
      display: none;
    }
  }
`;

let sampleData: PetitionData[] = [
  { category: Category.Life, title: "왜 외투 착용시 꼭 웃옷을 입어야하나요?", date: dayjs(), likes: 234 },
  { category: Category.Safety, title: "블랙아이스 때문에 병원에 입원했습니다.", date: dayjs(), likes: 234 },
  { category: Category.Life, title: "교사는 인권 침해를 해도 눈감아주나요?", date: dayjs(), likes: 234 },
  { category: Category.Life, title: "한밤의 시식회, 기숙사 냉장고가 뷔페인가요?", date: dayjs(), likes: 234 },
  { category: Category.Life, title: "왜 방학식 2주 뒤에 학교에 오는건가요?", date: dayjs(), likes: 234 },
  { category: Category.HumanRights, title: "교사는 인권 침해를 해도 눈감아주나요?", date: dayjs(), likes: 234 },
  { category: Category.Life, title: "왜 방학식 2주 뒤에 학교에 오는건가요?", date: dayjs(), likes: 234 },
  { category: Category.HumanRights, title: "교사는 인권 침해를 해도 눈감아주나요?", date: dayjs(), likes: 234 },
  { category: Category.Life, title: "한밤의 시식회, 기숙사 냉장고가 뷔페인가요?", date: dayjs(), likes: 234 },
  { category: Category.Life, title: "한밤의 시식회, 기숙사 냉장고가 뷔페인가요?", date: dayjs(), likes: 234 },
  { category: Category.Life, title: "왜 방학식 2주 뒤에 학교에 오는건가요?", date: dayjs(), likes: 234 },
];

sampleData.push(...sampleData);
sampleData.push(...sampleData);
sampleData.push(...sampleData);

function PetitionList({ title, perPage, categoryFilter }: PetitionListProps) {
  const [currentPage, setCurrentPage] = useState(0);

  let data = sampleData;
  if (categoryFilter != null) {
    data = sampleData.filter((item) => item.category === categoryFilter);
  }

  const pageCount = Math.ceil(data.length / perPage);

  const handlePageClick = (data: any) => {
    setCurrentPage(data.selected);
  }

  useEffect(() => {
    console.log('wow');
    setCurrentPage(0);
  }, [categoryFilter]);

  return (
    <Container>
      <Title>{title}</Title>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>분류</TableHeader>
            <TableHeader>제목</TableHeader>
            <TableHeader>청원일</TableHeader>
            <TableHeader>참여 인원</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {
            data.slice(currentPage * perPage, (currentPage + 1) * perPage).map(({ category, title, date, likes }, index) => (
              <TableRow key={index}>
                <TableCell style={{ color: colors.main }}>{categoryToString(category)}</TableCell>
                <TableCell>{title}</TableCell>
                <TableCell>{date.format('YY.MM.DD')}</TableCell>
                <TableCell style={{ color: colors.main }}>{likes}명</TableCell>
              </TableRow>
            ))
          }
        </tbody>

      </Table>
      <ReactPaginate
        containerClassName="pagination"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        forcePage={currentPage}
        previousLabel="< PREV"
        nextLabel="NEXT >"
      />
    </Container>
  )
}

PetitionList.defaultProps = {
  categoryFilter: null
}

export default PetitionList;