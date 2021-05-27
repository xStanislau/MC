import React from 'react';

// components
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/ProductCard';
import products from '../../constants/products';

// styles
import { Container, MainContent } from '../Main.style';

const Main = () => (
  <>
    <Header />
    <MainContent>
      <Container>
        {products.map(({ title, description, src, alt, price }, index) => {
          return (
            <ProductCard
              title={title}
              description={description}
              price={price}
              src={src}
              alt={alt}
              key={index}
            />
          );
        })}
      </Container>
    </MainContent>
    <Footer />
  </>
);

export default Main;
