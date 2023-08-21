import { createContext } from "react";
import PropTypes from 'prop-types';

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const value = {};

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
