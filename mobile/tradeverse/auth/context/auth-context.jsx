import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Current user state
  const [portfolioRefreshTrigger, setPortfolioRefreshTrigger] = useState(0); // Trigger state for portfolio updates

  const value = {
    user,
    setUser,
    portfolioRefreshTrigger,
    setPortfolioRefreshTrigger,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

