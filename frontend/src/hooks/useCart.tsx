import { createContext, ReactNode, useContext, useState } from 'react';

import IProductDTO from '../components/Product/dtos/IProductDTO';
import api from '../services/api';
import { useToast } from './toast';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface Stock {
  id: number;
  amount: number;
}

interface CartContextData {
  cart: IProductDTO[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const { addToast } = useToast();
  const [cart, setCart] = useState<IProductDTO[]>(() => {
    const storagedCart = localStorage.getItem('@AppVendas:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      const updatedCart = [...cart];

      const productExists = updatedCart.find(
        product => product.id === productId,
      );

      const stock: IProductDTO = await api.get(`/products/${productId}`);
      const stockAmount = stock.amount;

      const currentAmount = productExists ? productExists.amount : 0;
      const amount = currentAmount + 1;

      if (amount > stockAmount) {
        addToast({
          type: 'error',
          title: 'Erro ao adicionar',
          description: 'Quantidade solicitada fora de estoque',
        });
        return;
      }

      if (productExists) {
        productExists.amount = amount;
      } else {
        const product = await api.get(`/products/${productId}`);

        const newProduct = {
          ...product.data,
          amount: 1,
        };

        updatedCart.push(newProduct);
      }

      setCart(updatedCart);
      localStorage.setItem('@AppVendas:cart', JSON.stringify(updatedCart));
    } catch {
      addToast({
        type: 'error',
        title: 'Erro ao adicionar',
        description: 'Erro ao adicionar um produto',
      });
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const updatedCart = [...cart];
      const findProduct = updatedCart.findIndex(
        product => product.id === productId,
      );

      if (findProduct >= 0) {
        updatedCart.splice(findProduct, 1);
        setCart(updatedCart);
        localStorage.setItem('@AppVendas:cart', JSON.stringify(updatedCart));
      } else {
        throw Error();
      }
    } catch {
      addToast({
        type: 'error',
        title: 'Erro',
        description: 'Erro ao tentar remover o produto',
      });
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) {
        return;
      }

      const stock = await api.get(`/products/${productId}`);

      const stockAmount = stock.data.amount;

      if (amount > stockAmount) {
        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Quantidade solicitada fora de estoque',
        });
        return;
      }

      const updatedCart = [...cart];
      const productExists = updatedCart.find(
        product => product.id === productId,
      );

      if (productExists) {
        productExists.amount = amount;
        setCart(updatedCart);
        localStorage.setItem('@AppVendas:cart', JSON.stringify(updatedCart));
      } else {
        throw Error();
      }
    } catch {
      addToast({
        type: 'error',
        title: 'Erro',
        description: 'Erro na alteração de quantidade do produto',
      });
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
