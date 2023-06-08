import React, { useCallback, useEffect, useState } from 'react';
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import { useHistory } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import {
  Container,
  Content,
  CartContent,
  ProductCart,
  Total,
  FinalizarPedido,
} from './styles';
import { formatPrice } from '../../utils/format';
import { useProducts } from '../../hooks/product';
import IProductDTO from '../../components/Product/dtos/IProductDTO';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

const Cart: React.FC = () => {
  const { cart, removeProduct, updateProductAmount } = useCart();
  const { listProducts } = useProducts();
  const { user } = useAuth();
  const history = useHistory();

  const finalizarPedido = useCallback(async () => {
    const order = await api.post('/orders', {
      user_id: user.id,
      products: [...cart],
    });

    history.push('/dashboard');
  }, [cart, user.id]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      return sumTotal + product.price * product.amount;
    }, 0),
  );

  // function handleProductIncrement(product: Product) {
  //   updateProductAmount({
  //     productId: product.id,
  //     amount: product.amount + 1,
  //   });
  // }

  // function handleProductDecrement(product: Product) {
  //   updateProductAmount({
  //     productId: product.id,
  //     amount: product.amount - 1,
  //   });
  // }

  // const listCartProducts = useCallback(async () => {
  //   await api.get<IPostDTO[]>('/posts/user-posts').then(response => {
  //     setUserPosts(response.data);
  //   });
  // }, []);

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  return (
    <Container>
      <Header />

      <h1>Seu carrinho</h1>
      <Content>
        <CartContent>
          {cart.map(product => (
            <ProductCart>
              <strong>{product.name}</strong>

              <div className="description">
                <p>R${product.price}</p>
                <br />
                <p>{product.amount} unidade(s)</p>
              </div>
            </ProductCart>
          ))}
        </CartContent>

        <FinalizarPedido>
          <button type="button" onClick={finalizarPedido}>
            Finalizar pedido
          </button>

          <Total>
            <span>TOTAL</span>
            <strong>{total}</strong>
          </Total>
        </FinalizarPedido>
      </Content>

      <Footer />
    </Container>
  );
};

export default Cart;
