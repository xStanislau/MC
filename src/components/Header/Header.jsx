import React from 'react';
import Logo from '../Logo';
import Cart from '../Cart';
import Amount from '../Amount';

import { HeaderInner, StyledHeader } from './Header.style';

const Header = () => {
  return (
    <StyledHeader>
      <HeaderInner>
        <div>
          <Logo logo="The Best Shop" />
        </div>
        <div>
          <Cart count={0} />
          <Amount value={0} />
        </div>
      </HeaderInner>
    </StyledHeader>
  );
};

export default Header;
