// src/components/HomePage.js
import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import BottomNav from './BottomNav';
import DatabaseMessage from './DatabaseMessage';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <DatabaseMessage />
      <BottomNav />
      <div className="home-container">
        <h1>Welcome to the Home Page</h1>
        <a href="/login">Login</a>
      </div>
    </>
  );
}
