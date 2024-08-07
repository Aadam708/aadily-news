// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import UserHomePage from './Pages/UserHomePage';
import Logout from './components/Logout';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/homePage" element={<UserHomePage />} />
          <Route path="/logout" element={<Logout />} /> {/* Add the logout route */}
          <Route path="/PoliticsPage" element={<UserHomePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
