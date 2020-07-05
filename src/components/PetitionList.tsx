import React, { useState } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

import dayjs from 'dayjs';
import colors from 'assets/colors';

interface PetitionListProps {
  title: String,
  perPage: number
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

  &:nth-child(3) {
    width: 100px;
  }

  &:nth-child(4) {
    width: 100px;
  }
`;

const TableCell = styled.td`
  font-size: 1.2rem;
  text-align: center;

  padding: 1rem 0;
`;

function PetitionList({ title, perPage }: PetitionListProps) {
  const [offset, setOffset] = useState(0);

  const data = [
    { category: "생활", title: "왜 외투 착용시 꼭 웃옷을 입어야하나요?", date: dayjs(), count: 234 },
    { category: "안전/환경", title: "블랙아이스 때문에 병원에 입원했습니다.", date: dayjs(), count: 234 },
    { category: "인권", title: "교사는 인권 침해를 해도 눈감아주나요?", date: dayjs(), count: 234 },
    { category: "생활", title: "한밤의 시식회, 기숙사 냉장고가 뷔페인가요?", date: dayjs(), count: 234 },
    { category: "생활", title: "왜 방학식 2주 뒤에 학교에 오는건가요?", date: dayjs(), count: 234 },
    { category: "인권", title: "교사는 인권 침해를 해도 눈감아주나요?", date: dayjs(), count: 234 },
    { category: "생활", title: "왜 방학식 2주 뒤에 학교에 오는건가요?", date: dayjs(), count: 234 },
    { category: "인권", title: "교사는 인권 침해를 해도 눈감아주나요?", date: dayjs(), count: 234 },
    { category: "생활", title: "한밤의 시식회, 기숙사 냉장고가 뷔페인가요?", date: dayjs(), count: 234 },
    { category: "생활", title: "한밤의 시식회, 기숙사 냉장고가 뷔페인가요?", date: dayjs(), count: 234 },
    { category: "생활", title: "왜 방학식 2주 뒤에 학교에 오는건가요?", date: dayjs(), count: 234 },
  ]

  const pageCount = Math.ceil(data.length / perPage);

  const handlePageClick = (data: any) => {
    setOffset(data.selected * perPage);
  }

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
            data.slice(offset, offset + perPage).map(({ category, title, date, count }) => (
              <TableRow>
                <TableCell style={{ color: colors.main }}>{category}</TableCell>
                <TableCell>{title}</TableCell>
                <TableCell>{date.format('YY.MM.DD')}</TableCell>
                <TableCell style={{ color: colors.main }}>{count}명</TableCell>
              </TableRow>
            ))
          }
        </tbody>

      </Table>
      <ReactPaginate
        pageCount={pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
      />
    </Container>
  )
}

export default PetitionList;