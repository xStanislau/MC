import styled from 'styled-components';
import { theme } from '../../styles/theme';

const { lightGrey, black } = theme.colors;

export const StyledHeader = styled.header`
  color: ${lightGrey};
  background-color: ${black};
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  max-width: 1024px;
  padding: 0 16px;
  margin: 0 auto;
`;
