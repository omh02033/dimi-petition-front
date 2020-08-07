import React from 'react';
import styled from 'styled-components';

import ComponentTitle from 'components/ComponentTitle';

const Container = styled.section`
  padding: 5rem 0;
`;

const RulesPage = () => {
  return (
    <Container>
      <ComponentTitle>
        디미청원 시행규칙
      </ComponentTitle>
    </Container>
  )
};

export default RulesPage;