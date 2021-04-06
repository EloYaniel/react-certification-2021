import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { Home } from '../Home';
import { Header } from '../Header';
import { Detail } from '../Detail';
import { Provider as GlobalProvider, Context as GlobalContext } from '../../contexts';
import { GlobalStyle, lightTheme, darkTheme, MainContainer } from './styles';
import { NotFound } from '../NotFound';
import { Favorite } from '../Favorite';
import { Auth } from '../Auth';
import { Modal } from '../Modal';

export const Main = () => {
  const {
    state: { isDarkTheme },
  } = useContext(GlobalContext);
  const location = useLocation();

  const background = location.state && location.state.background;

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <Switch location={background || location}>
          <Route path="/" exact component={Home} />
          <Route path="/detail/:videoID" component={Detail} />
          <Route path="/favorites" component={Favorite} />
          <Route path="/page-not-found" component={NotFound} />
          <Route path="*" component={NotFound} />
        </Switch>
        {background && (
          <Route path="/login">
            <Modal>
              <Auth />
            </Modal>
          </Route>
        )}
      </MainContainer>
    </ThemeProvider>
  );
};

export const App = () => (
  <GlobalProvider>
    <Router>
      <Main />
    </Router>
  </GlobalProvider>
);
