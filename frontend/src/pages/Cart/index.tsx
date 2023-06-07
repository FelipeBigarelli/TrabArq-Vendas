import React, { useCallback, useState } from 'react';
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import { useCart } from '../../hooks/useCart';
import { Container } from './styles';
import { formatPrice } from '../../utils/format';
import { useProducts } from '../../hooks/product';
import IProductDTO from '../../components/Product/dtos/IProductDTO';
import Header from '../../components/Header';

const Cart: React.FC = () => {
  const [cartProducts, setCartProducts] = useState<IProductDTO[]>([]);
  const { cart, removeProduct, updateProductAmount } = useCart();
  const { listProducts } = useProducts();

  // const cartFormatted = cart.map(product => ({
  //   ...product,
  //   priceFormatted: formatPrice(product.price),
  //   subTotal: formatPrice(product.price * product.amount),
  // }));

  // const total = formatPrice(
  //   cart.reduce((sumTotal, product) => {
  //     return sumTotal + product.price * product.amount;
  //   }, 0),
  // );

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

  const listCartProducts = useCallback(async () => {
    await api.get<IPostDTO[]>('/posts/user-posts').then(response => {
      setUserPosts(response.data);
    });
  }, []);

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  return (
    <Container>
      {/* <Header /> */}
      <h1>Cart</h1>
    </Container>
  );
};

export default Cart;
