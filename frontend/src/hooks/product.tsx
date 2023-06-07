import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import api from '../services/api';
import IProductDTO from '../components/Product/dtos/IProductDTO';

interface ProductContextData {
  listAllProducts(): void;
  listProducts: IProductDTO[];
  findById(id: string): void;
  productById: IProductDTO | undefined;
}

const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData,
);

const ProductProvider: React.FC = ({ children }) => {
  const [listProducts, setListProducts] = useState<IProductDTO[]>([]);
  const [productById, setProductById] = useState<IProductDTO>();

  const listAllProducts = useCallback(async () => {
    await api.get<IProductDTO[]>('/products').then(response => {
      setListProducts(response.data);
    });
  }, []);

  const findById = useCallback(async (id: string) => {
    const findProductById = await api.get(`/products`).then(response => {
      setProductById(response.data.id);
    });

    return findProductById;
  }, []);

  useEffect(() => {
    listAllProducts();
  }, [listAllProducts]);

  return (
    <ProductContext.Provider
      value={{
        listAllProducts,
        listProducts,
        findById,
        productById,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

function useProducts(): ProductContextData {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('useProducts must be userd within a ProductProvider');
  }

  return context;
}

export { ProductProvider, useProducts };
