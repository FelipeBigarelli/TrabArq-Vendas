import styled from 'styled-components';
import { darken, shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.green};
  border-radius: 8px;

  width: 160px;
  height: auto;
  margin: 16px 8px;

  transition: all 0.2s;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${shade(0.05, '#fff')};
  border-radius: 8px;

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

  button {
    background: #008968;
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;

    font-size: 10px;

    display: flex;
    align-items: center;
    transition: background 0.2s;

    &:hover {
      background: #ff9000;
    }

    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);

      svg {
        margin-right: 5px;
      }
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
`;
