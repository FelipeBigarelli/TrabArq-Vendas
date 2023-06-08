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
import Button from '../Button';
import { useToast } from '../../hooks/toast';

interface IProductProps {
  product: IProductDTO;
}

interface CartItemsAmount {
  [key: number]: number;
}

const Product: React.FC<IProductProps> = ({ product }: IProductProps) => {
  const { addProduct, cart } = useCart();
  const { addToast } = useToast();

  const cartItemsAmount = cart.reduce((sumAmount, prod) => {
    const newSumAmount = { ...sumAmount };
    newSumAmount[prod.id] = prod.amount;

    return newSumAmount;
  }, {} as CartItemsAmount);

  async function handleAddProduct(id: number) {
    await addProduct(id);

    addToast({
      type: 'success',
      title: 'Item adicionado',
      description: 'Item adicionado ao carrinho',
    });
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
          key={product.id}
          type="button"
          data-testid="add-product-button"
          onClick={() => handleAddProduct(product.id)}
        >
          <div data-testid="cart-product-quantity">
            <MdAddShoppingCart size={16} color="#FFF" />
            {cartItemsAmount[product.id] || 0}
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </Content>
    </Container>
  );
};

export default Product;
