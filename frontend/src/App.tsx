import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import defaultTheme from './styles/colors/default';

import AppProvider from './hooks';

import Routes from './routes';
import { ProductProvider } from './hooks/product';
import { CartProvider } from './hooks/useCart';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <ThemeProvider theme={defaultTheme}>
          <CartProvider>
            <ProductProvider>
              <BrowserRouter>
                <Routes />
              </BrowserRouter>
            </ProductProvider>
          </CartProvider>
        </ThemeProvider>
      </AppProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
