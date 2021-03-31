import React, { createContext, useReducer } from 'react';
import { isAuthenticated } from '../services/auth/auth';
import { LOGIN, LOGOUT, SEARCH_ACTION_TYPE, TOGGLE_THEME_ACTION_TYPE } from './constants';

const initialState = {
  searchText: undefined,
  isDarkTheme: false,
  isLoggedIn: isAuthenticated(),
  userInfo: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SEARCH_ACTION_TYPE:
      return { ...state, ...action.payload };
    case TOGGLE_THEME_ACTION_TYPE:
      return { ...state, isDarkTheme: !state.isDarkTheme };
    case LOGIN:
      return { ...state, isLoggedIn: true, userInfo: action.payload };
    case LOGOUT:
      return { ...state, isLoggedIn: false, userInfo: undefined };
    default:
      return state;
  }
};

const Context = createContext({});

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export { Context, Provider };
