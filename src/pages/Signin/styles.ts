import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #222f3e;
      border-radius: 10px;
      border: 2px solid #8395a7;
      padding: 16px;
      width: 100%;
      color: #f4ede8;

      &::placeholder {
        color: #576574;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: #ff9000;
      color: #312e38;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      width: 100%;
      font-weight: 500;
      margin-top: 19px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
        color: #f4ede8;
      }
    }

    a {
      display: block;
      color: #f4ede8;
      margin-top: 19px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    display: block;
    color: #ff9000;
    margin-top: 19px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  display: flex;
  flex: 1;
  background: #141418;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
