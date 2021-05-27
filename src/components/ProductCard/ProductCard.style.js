import styled from 'styled-components';

import { theme } from '../../styles/theme';

import Button from '../Button';

const { typography, colors } = theme;

export const StyledProductCard = styled.div`
  display: flex;
  height: 192px;
  margin: 24px 0;
  padding: 16px;
  background-color: #fefefe;
  border-radius: 4px;
`;

export const ProductImage = styled.img`
  width: 20%;
  height: auto;
  object-fit: contain;
`;

export const ProductInfo = styled.div`
  align-self: center;
  margin-left: 16px;
  max-width: 400px;
`;

export const ProductTitle = styled.h2`
  font-size: ${typography.fontSize3};
  margin-top: 0;
  margin-bottom: 16px;
`;

export const ProjectDescription = styled.p`
  margin: 0;
`;

export const PriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin-left: auto;
`;

export const ProductPrice = styled.span`
  font-size: ${typography.fontSize3};
  margin-bottom: 16px;
  display: block;
`;

const { base, hover } = colors.accent;
export const StyledProductButton = styled(Button)`
  background-color: ${hover};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 192px;
  height: 40px;
  padding: 0 16px;
  font-size: ${typography.fontSize2};
  color: ${colors.white};
  text-decoration: none;
  white-space: nowrap;
  outline: none;
  border: none;
  border-radius: 4px;
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

  &:hover {
    background-color: ${base};
  }
`;
