import React from 'react';
import { number, string } from 'prop-types';

import Button from '../Button';

const ProductCard = ({ src, alt, title, description, price }) => {
  return (
    <div>
      <img src={src} alt={alt} />
      <div>
        <h2>{title}</h2>
        <div>{description}</div>
      </div>
      <div>
        <span>{price}$</span>
        <Button text="Add to basket" />
      </div>
    </div>
  );
};

ProductCard.defaultProps = {
  price: 0,
};

ProductCard.propTypes = {
  src: string.isRequired,
  alt: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  price: number,
};

export default ProductCard;
