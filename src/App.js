import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar  />
        <BottomNav />



        <Routes>
          <Route path='/' exact />
        </Routes>

      </Router>

    </>
  );
}

export default App;
