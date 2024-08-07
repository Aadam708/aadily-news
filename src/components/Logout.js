// src/components/Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout(); // Call the logout function to clear authentication state
    navigate('/'); // Redirect to the main page
    console.log('logged out')
  }, [logout, navigate]);

  return <p>Logging out...</p>; // Optional: display a message while logging out
}

export default Logout;
export default Logout;
