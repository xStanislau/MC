import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const StyledCart = styled.div`
  position: relative;
  max-width: 100%;
`;

export const CartTile = styled.span`
  font-size: ${theme.typography.fontSize1};
`;

export const CartBadge = styled.div`
  display: inline-flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  background-color: #ff9300;
  border-radius: 50%;
  font-size: ${theme.typography.fontSize0};
  position: absolute;
  right: 0px;
  top: -6px;
`;
