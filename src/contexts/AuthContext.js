// src/contexts/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const login = (details) => {
    setIsAuthenticated(true);
    setUserDetails(details);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserDetails(null);
  };

  useEffect(() => {
    if (userDetails) {
      console.log("User details updated:", userDetails);
    }
  }, [userDetails]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userDetails, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}