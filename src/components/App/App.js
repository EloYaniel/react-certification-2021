import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Home } from '../Home';
import { Header } from '../Header';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  body {
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  @media only screen and (max-width: 60em) {
    body {
      padding: 3rem;
    }
  }
`;

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Home />
  </>
);
