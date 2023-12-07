// AuthContext.js
import React from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [authChange, setAuthChange] = React.useState(false);

  return (
    <AuthContext.Provider value={{ authChange, setAuthChange }}>
      {children}
    </AuthContext.Provider>
  );
};