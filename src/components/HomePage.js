// src/components/HomePage.js
import React from 'react';
import Navbar from './Navbar';
import BottomNav from './BottomNav';
import DatabaseMessage from './DatabaseMessage';
import '../App.css'
function HomePage() {
  return (
    <>
      <Navbar />
      <BottomNav />
      <DatabaseMessage />
      <div className="home-container">
        <h1>Welcome to the Home Page</h1>
        <a href="/login">Login</a>
      </div>
    </>
  );
}

export default HomePage;