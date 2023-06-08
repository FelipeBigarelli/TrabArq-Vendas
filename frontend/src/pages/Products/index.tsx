import React, { useCallback, useEffect, useState } from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Content } from './styles';

import api from '../../services/api';
import { useProducts } from '../../hooks/product';
import Product from '../../components/Product';
import IProductDTO from '../../components/Product/dtos/IProductDTO';
import { useCart } from '../../hooks/useCart';

const Products: React.FC = () => {
  const { listProducts } = useProducts();

  useEffect(() => {
    console.log(listProducts);
  }, [listProducts]);

  return (
    <Container>
      <Header />

      <Content>
        {listProducts.map(product => (
          <>
            <Product key={product.id} product={product} />
          </>
        ))}
      </Content>

      <Footer />
    </Container>
  );
};

export default Products;
