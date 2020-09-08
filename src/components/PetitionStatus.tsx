import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import colors from 'assets/colors';
import devices from 'assets/devices';

import { FiAlertCircle, FiClock, FiCheckCircle } from 'react-icons/fi';

const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 2rem 0 4rem 0;
  @media ${devices.tablet} {
    flex-direction: column;
  }
`;

const Status = styled.section`
  display: grid;
  grid-template-columns: 68px 130px;
  grid-template-rows: 30px 30px;
  align-items: center;

  margin: 1rem 2rem;
`;

const Icon = styled.div`
  font-size: 3.5rem;
  color: ${colors.main};

  grid-row: 1/3;
  margin-top: 10px;
`;

const Title = styled.h1`
  font-weight: normal;
  font-size: 1.3rem;
`;

const Number = styled.p`
  font-size: 1.3rem;
  color: ${colors.main};
`;

const PetitionStatus= () => {
  const [status, setStatus] = useState({p: 0, w: 0, a: 0});

  useEffect(() => {
    async function fetch() {
      const fetched = await axios.get('/petitions/summary');
      setStatus(fetched.data.summary);
    }

    fetch();
  }, []);

  return (
    <Container>
      <Status>
        <Icon>
          <FiAlertCircle />
        </Icon>
        <Title>등록된 청원</Title>
        <Number>{status.p + status.w + status.a}</Number>
      </Status>

      <Status>
        <Icon>
          <FiClock />
        </Icon>
        <Title>진행 중인 청원</Title>
        <Number>{status.p}</Number>
      </Status>

      <Status>
        <Icon>
          <FiCheckCircle />
        </Icon>
        <Title>답변된 청원</Title>
        <Number>{status.a}</Number>
      </Status>
    </Container>
  );
}

export default PetitionStatus;
