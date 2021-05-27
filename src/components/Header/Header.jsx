import React from 'react';
import { useSelector } from 'react-redux';

// components
import Logo from '../Logo';
import Cart from '../Cart';
import Amount from '../Amount';

import { HeaderInner, StyledHeader } from './Header.style';

const Header = () => {
  const productPriceValue = useSelector((state) => {
    return state.reduce((acc, currentVal) => {
      return acc + currentVal.price;
    }, 0);
  });

  const productsCount = useSelector((state) => state.length);
  return (
    <StyledHeader>
      <HeaderInner>
        <div>
          <Logo logo="The Best Shop" />
        </div>
        <div>
          <Cart count={productsCount} />
          <Amount value={productPriceValue} />
        </div>
      </HeaderInner>
    </StyledHeader>
  );
};

export default Header;
