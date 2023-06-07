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
  justify-content: center;

  padding: 32px 0;

  width: 100%;
  max-width: 1200px;
`;
