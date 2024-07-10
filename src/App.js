import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import DatabaseTest from './components/databaseTest';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar  />
        <BottomNav />
        <DatabaseTest />




        <Routes>
          <Route path='/' exact />
        </Routes>

      </Router>

    </>
  );
}

export default App;
