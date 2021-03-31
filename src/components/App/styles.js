import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  body {
    background-color: ${(props) => props.theme.bodyBackgroundColor};
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

export const darkTheme = {
  textColor: '#fff',
  cardColor: '#424242',
  cardTitleColor: '#fff',
  cardDescriptionColor: '#fff',
  bodyBackgroundColor: '#303030',
  primaryColor: '',
  backgroundColor: '#000000',
};

export const lightTheme = {
  textColor: '#000',
  cardColor: '#fff',
  cardTitleColor: '#0d0d0d',
  cardDescriptionColor: '#3d3d3d',
  bodyBackgroundColor: '#eee',
  primaryColor: '',
  backgroundColor: '#1c5476',
};
