import React, { useContext } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Context as GlobalContext, SEARCH_ACTION_TYPE } from '../../../contexts';
import { Container } from './styles';

export const SearchBar = () => {
  const { dispatch } = useContext(GlobalContext);

  const searchDebounced = useDebouncedCallback((value) => {
    dispatch({ type: SEARCH_ACTION_TYPE, payload: { searchText: value } });
  }, 400);

  return (
    <Container
      onChange={(e) => searchDebounced.callback(e.target.value)}
      placeholder="Search..."
    />
  );
};
