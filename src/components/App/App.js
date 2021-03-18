import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Home } from '../Home';
import { Header } from '../Header';
import { Detail } from '../Detail';
import { Provider as SearchProvider } from '../../contexts/SearchContext';

const DETAIL_VIEW = 'DETAIL_VIEW';
const HOME_VIEW = 'HOME_VIEW';

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

export const App = () => {
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
    <SearchProvider>
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
    </SearchProvider>
  );
};
