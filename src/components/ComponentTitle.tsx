import styled from 'styled-components';

import colors from 'assets/colors';

const ComponentTitle = styled.h1`
  display: block;
  margin: 0 auto;

  font-size: 1.5rem; 
  border-top: 3px solid ${colors.main};
  padding-top: 1rem;
`;

export default ComponentTitle;