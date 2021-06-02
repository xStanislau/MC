import React from 'react';
import { number, string } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// redux
import { addToBasket, removeFromBasket } from '../../redux/products';

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

const ProductCard = ({ src, alt, title, description, price, productId }) => {
  const dispatch = useDispatch();
  const isProductAdded = useSelector((state) =>
    state.some((product) => product.id === productId),
  );

  const handleButtonClick = (productPrice, id) => () => {
    if (isProductAdded) {
      dispatch(removeFromBasket(id));
    } else {
      dispatch(addToBasket({ price: productPrice, id }));
    }
  };

  const text = isProductAdded ? 'Remove from basket' : 'Add to basket';

  return (
    <StyledProductCard>
      <ProductImage src={src} alt={alt} />
      <ProductInfo>
        <ProductTitle>{title}</ProductTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </ProductInfo>
      <PriceBlock>
        <ProductPrice>{price}$</ProductPrice>
        <StyledProductButton
          text={text}
          onClick={handleButtonClick(price, productId)}
        />
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
  productId: string.isRequired,
};

export default ProductCard;
