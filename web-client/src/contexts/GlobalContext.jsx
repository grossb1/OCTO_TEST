import React from 'react';

const GlobalContext = React.createContext({
  role: null,
  setRole: () => {},
});

export default GlobalContext;