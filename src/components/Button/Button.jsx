import React from 'react';
import { func, string } from 'prop-types';

const Button = ({ text, className, onClick }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  onClick: () => {},
};

Button.propTypes = {
  text: string.isRequired,
  className: string,
  onClick: func,
};

export default Button;
