// src/components/HomePage.js
import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import BottomNav from '../components/BottomNav';
import DatabaseMessage from '../components/DatabaseMessage';

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
