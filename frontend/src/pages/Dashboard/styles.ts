import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 96px 0;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textColor};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  margin: 0 auto;

  width: 100%;
  max-width: 1200px;
`;

export const Welcome = styled.div`
  h1 {
    padding-bottom: 40px;
    font-size: 48px;
  }

  h2 {
    padding-bottom: 24px;
    font-size: 2em;
  }
`;

export const Orders = styled.div`
  h1 {
    font-size: 32px;
  }
`;

export const OrdersContent = styled.div``;
