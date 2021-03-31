import styled, { createGlobalStyle } from 'styled-components';

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
  textColor: '#464e51',
  cardColor: '#fff',
  cardTitleColor: '#0d0d0d',
  cardDescriptionColor: '#3d3d3d',
  bodyBackgroundColor: '#eee',
  primaryColor: '',
  backgroundColor: '#1c5476',
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
  }

  html {
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.bodyBackgroundColor};
    justify-content: center;
    align-items: center;
  }
`;

export const MainContainer = styled.div`
  margin: 50px;
`;
