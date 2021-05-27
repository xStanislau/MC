import React from 'react';
import { number, string } from 'prop-types';

// components

// styles
import {
  PriceBlock,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductTitle,
  ProjectDescription,
  StyledProductButton,
  StyledProductCard,
} from './ProductCard.style';

const ProductCard = ({ src, alt, title, description, price }) => {
  return (
    <StyledProductCard>
      <ProductImage src={src} alt={alt} />
      <ProductInfo>
        <ProductTitle>{title}</ProductTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </ProductInfo>
      <PriceBlock>
        <ProductPrice>{price}$</ProductPrice>
        <StyledProductButton text="Add to basket" />
      </PriceBlock>
    </StyledProductCard>
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
