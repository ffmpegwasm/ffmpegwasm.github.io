import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  drawerOpen: false,
};

const reducer = (state, { type }) => {
  switch (type) {
    case 'TOGGLE_DRAWER':
      return { ...state, drawerOpen: !state.drawerOpen };
    default:
      return state;
  }
};

export const HomeContext = createContext(initialState);

export const HomeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <HomeContext.Provider value={{ state, dispatch }}>
      {children}
    </HomeContext.Provider>
  );
};

HomeProvider.propTypes = {
  children: PropTypes.node,
};

HomeProvider.defaultProps = {
  children: null,
};
