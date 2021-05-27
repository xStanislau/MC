import React from 'react';
import { string } from 'prop-types';
import { StyledLogo } from './Logo.style';

const Logo = ({ logo }) => {
  return <StyledLogo>{logo}</StyledLogo>;
};

Logo.propTypes = {
  logo: string.isRequired,
};

export default Logo;
