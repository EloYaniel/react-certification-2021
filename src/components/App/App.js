import React, { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Home } from '../Home';
import { Header } from '../Header';
import { Detail } from '../Detail';
import { Provider as GlobalProvider, Context as GlobalContext } from '../../contexts';
import { GlobalStyle, lightTheme, darkTheme } from './styles';

const DETAIL_VIEW = 'DETAIL_VIEW';
const HOME_VIEW = 'HOME_VIEW';

export const Main = () => {
  const {
    state: { isDarkTheme },
  } = useContext(GlobalContext);
  const [currentView, setCurrentView] = useState(HOME_VIEW);
  const [currentVideoId, setCurrentVideoId] = useState();

  const viewMoreHandler = (id) => {
    setCurrentVideoId(id);
    setCurrentView(DETAIL_VIEW);
  };

  const goHomeViewHandler = () => {
    setCurrentView(HOME_VIEW);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      {currentView === HOME_VIEW ? (
        <Home handleViewMore={viewMoreHandler} />
      ) : (
        <Detail
          handleGoBack={goHomeViewHandler}
          videoId={currentVideoId}
          onVideoChanged={setCurrentVideoId}
        />
      )}
    </ThemeProvider>
  );
};

export const App = () => (
  <GlobalProvider>
    <Main />
  </GlobalProvider>
);
