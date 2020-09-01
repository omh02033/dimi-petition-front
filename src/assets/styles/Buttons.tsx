import styled from 'styled-components';
import colors from 'assets/colors';

export const PrimaryButton = styled.input`
  padding: 0.7rem 0;

  border-radius: 5px;
  border: none;

  background-color: ${colors.main};
  color: white;
  font-size: 1.1rem;
  cursor: pointer;

  text-align: center;
`;

export const SecondaryButton = styled(PrimaryButton)`
  border: 1px solid #B8B8B8;
  color: #B8B8B8;
  background-color: white;
`;
