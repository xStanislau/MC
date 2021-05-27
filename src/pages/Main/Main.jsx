import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/ProductCard';
import products from '../../constants/products';

const Main = () => (
  <div>
    <Header />
    <section>
      {products.map(({ title, description, src, alt, price }, index) => {
        return (
          <ProductCard
            title={title}
            description={description}
            src={src}
            price={price}
            key={index}
          />
        );
      })}
    </section>
    <Footer />
  </div>
);

export default Main;
