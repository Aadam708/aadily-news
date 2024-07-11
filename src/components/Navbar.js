import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignupModal from './SignupModal'; // Ensure this matches the actual file name
import './Navbar.css';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log('Opening modal'); // Debugging
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('Closing modal'); // Debugging
    setIsModalOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="navbar-logo">
          AADILY UK
        </Link>
      </div>

      <div className="nav-buttons">
        <button className="sign-in" onClick={openModal}>Sign In</button>
        <Link className="subscribe" to="/">Subscribe</Link>
      </div>

      <div className="navbar-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Politics
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Business
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Technology
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Markets
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Opinion
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Wealth
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Pursuits
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Videos
            </Link>
          </li>
        </ul>
      </div>

      <SignupModal isOpen={isModalOpen} onRequestClose={closeModal} /> {/* Ensure this matches the actual file name */}
    </nav>
  );
}
