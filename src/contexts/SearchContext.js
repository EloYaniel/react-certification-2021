import React, { createContext, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'search':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const Context = createContext({});

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { searchText: undefined });

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export { Context, Provider };
