import React from 'react';
import styled from 'styled-components';

import dayjs from 'dayjs';

import colors from 'assets/colors';

interface PetitionListProps {
  title: String
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
`;

const TableCell = styled.td`
  font-size: 1.2rem;
  text-align: center;

  padding: 1rem 0;
`;

function PetitionList({ title }: PetitionListProps) {
  const data = [
    { category: "생활", title: "왜 외투 착용시 꼭 웃옷을 입어야하나요?", date: new Date(), count: 234 },
    { category: "안전/환경", title: "블랙아이스 때문에 병원에 입원했습니다.", date: new Date(), count: 234 },
    { category: "인권", title: "교사는 인권 침해를 해도 눈감아주나요?", date: new Date(), count: 234 },
    { category: "생활", title: "한밤의 시식회, 기숙사 냉장고가 뷔페인가요?", date: new Date(), count: 234 },
    { category: "생활", title: "왜 방학식 2주 뒤에 학교에 오는건가요?", date: new Date(), count: 234 },
  ]

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
            data.map(({ category, title, date, count }) => (
              <TableRow>
                <TableCell style={{ color: colors.main }}>{category}</TableCell>
                <TableCell>{title}</TableCell>
                <TableCell>{dayjs().format('YY.MM.DD')}</TableCell>
                <TableCell style={{ color: colors.main }}>{count}명</TableCell>
              </TableRow>
            ))
          }
        </tbody>

      </Table>
    </Container>
  )
}

export default PetitionList;