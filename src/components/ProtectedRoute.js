// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();


  return isAuthenticated ? children : <Navigate to="/" />;
};


export default ProtectedRoute;