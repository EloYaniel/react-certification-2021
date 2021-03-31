import React, { useContext } from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { FavoriteDetail } from './FavoriteDetail';
import { FavoriteList } from './FavoriteList';
import { Context as GlobalContext } from '../../contexts';

export const Favorite = () => {
  const {
    state: { isLoggedIn },
  } = useContext(GlobalContext);

  const { path } = useRouteMatch();

  return (
    <Switch>
      {isLoggedIn ? (
        <>
          <Route exact path={path} component={FavoriteList} />
          <Route path={`${path}/:videoID`} component={FavoriteDetail} />
        </>
      ) : (
        <Redirect to="/" />
      )}
    </Switch>
  );
};
