import React from 'react';
import { number } from 'prop-types';
import { StyledCart, CartBadge, CartTile } from './Cart.style';

const Cart = ({ count }) => {
  return (
    <StyledCart>
      <CartTile>Basket</CartTile>
      <CartBadge>{count}</CartBadge>
    </StyledCart>
  );
};

Cart.propTypes = {
  count: number.isRequired,
};

export default Cart;
