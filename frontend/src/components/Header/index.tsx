import React from 'react';

import { Container, Content } from './styles';

import logoImg from '../../assets/sales.png';
import productsImg from '../../assets/dairy-products.png';
import cartImg from '../../assets/shopping-cart.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <a className="menu-item" href="/products">
          <img src={productsImg} alt="Produtos" />
          Produtos
        </a>

        <a href="/dashboard" className="logo-header">
          <img src={logoImg} alt="Sales" />
        </a>

        <a href="/cart" className="logo-header">
          <img src={cartImg} alt="Cart" />
          Carrinho
        </a>
      </Content>
    </Container>
  );
};

export default Header;
