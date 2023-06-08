import styled from 'styled-components';
import { darken, lighten, shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 96px 0;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textColor};

  h1 {
    padding: 32px 0 0 240px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  justify-content: space-between;
  padding: 32px 240px;
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;

  height: auto;
`;

export const ProductCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${shade(0.05, '#fff')};
  border-radius: 8px;
  border: 1px solid #008968;

  margin: 4px;
  padding: 8px;

  strong {
    font-size: 24px;
    padding-bottom: 8px;
    color: #ff9000;
  }

  .description {
    padding: 4px 0 16px;
  }
`;

export const FinalizarPedido = styled.div`
  padding-top: 4px;

  button {
    height: 32px;
    width: 168px;
    font-weight: 500;

    border-radius: 4px;
    border: none;
    background: ${({ theme }) => theme.colors.orange};
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }

    margin-bottom: 8px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: row;
  span {
    color: #008968;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
