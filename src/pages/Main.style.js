import styled from 'styled-components';
import { theme } from '../styles/theme';

const { colors } = theme;

export const MainContent = styled.main`
  background-color: ${colors.darkGrey};
  min-height: calc(100vh - 120px);
  overflow: hidden;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 0 16px;
  margin: 0 auto;
`;
