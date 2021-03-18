import React, { useContext } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Context as SearchContext } from '../../../contexts/SearchContext';
import { Container } from './styles';

export const SearchBar = () => {
  const { dispatch } = useContext(SearchContext);

  const searchDebounced = useDebouncedCallback((value) => {
    dispatch({ type: 'search', payload: { searchText: value } });
  }, 400);

  return (
    <Container
      onChange={(e) => searchDebounced.callback(e.target.value)}
      placeholder="Search..."
    />
  );
};
