import React, { createContext, useReducer } from 'react';
import { SEARCH_ACTION_TYPE, TOGGLE_THEME_ACTION_TYPE } from './constants';

const reducer = (state, action) => {
  switch (action.type) {
    case SEARCH_ACTION_TYPE:
      return { ...state, ...action.payload };
    case TOGGLE_THEME_ACTION_TYPE:
      return { ...state, isDarkTheme: !state.isDarkTheme };
    default:
      return state;
  }
};

const Context = createContext({});

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    searchText: undefined,
    isDarkTheme: false,
  });

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export { Context, Provider };
