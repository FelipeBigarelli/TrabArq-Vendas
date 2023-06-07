import styled from 'styled-components';

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;

  height: 64px;
  width: 100%;

  background: #008968;
  box-shadow: 0 0 1em red;
`;

export const Content = styled.div`
  width: 100%;
  /* max-width: 1200px; */
  height: inherit;

  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: #ffe100;
    text-shadow: 1px 1px #ff0000;

    transition: all 0.2s;

    img {
      height: 48px;
    }

    &:hover {
      padding-bottom: 4px;
    }
  }
`;
