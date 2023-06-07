import React, { useCallback, useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiAlertTriangle } from 'react-icons/fi';
import Carousel from 'react-elastic-carousel';

import { MdAddShoppingCart } from 'react-icons/md';
import Modal from '../Modal';

import { Container, Content } from './styles';
import { useModal } from '../../hooks/modal';
import IProductDTO from './dtos/IProductDTO';
import { useCart } from '../../hooks/useCart';

interface IProductProps {
  product: IProductDTO;
}

const Product: React.FC<IProductProps> = ({ product }: IProductProps) => {
  const { addProduct, cart } = useCart();

  function handleAddProduct(id: number) {
    addProduct(id);
  }

  return (
    <Container>
      <Content>
        <strong>{product.name}</strong>

        <div className="description">
          <p>R${product.price}</p>
          <br />
          <p>{product.quantity} unidade(s) restante(s)</p>
        </div>

        <button
          type="button"
          data-testid="add-product-button"
          onClick={() => handleAddProduct(product.id)}
        >
          <div data-testid="cart-product-quantity">
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </Content>
    </Container>
  );
};

export default Product;
