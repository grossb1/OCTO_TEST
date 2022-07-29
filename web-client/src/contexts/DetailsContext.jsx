import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

const DetailsContext = createContext();

function DetailsProvider({ children, details, updateRecord }) {
  const value = useMemo(() => ({
    details, updateRecord,
  }), [details, updateRecord]);

  return (
    <DetailsContext.Provider value={value}>
      {children}
    </DetailsContext.Provider>
  );
}

DetailsProvider.propTypes = {
  children: PropTypes.any,
  details: PropTypes.any,
  updateRecord: PropTypes.any,
};

export { DetailsContext, DetailsProvider };
