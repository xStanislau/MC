import React from 'react';
import { number, string } from 'prop-types';
import { StyledAmount } from './Amount.style';

const Amount = ({ value, titleClass, valueClass }) => {
  return (
    <StyledAmount className={valueClass}>
      <span className={titleClass}>Amount: </span>
      {value}$
    </StyledAmount>
  );
};

Amount.defaultProps = {
  titleClass: '',
  valueClass: '',
};

Amount.propTypes = {
  value: number.isRequired,
  titleClass: string,
  valueClass: string,
};

export default Amount;
