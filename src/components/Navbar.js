import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="navbar-logo">
          AADILY UK
        </Link>
      </div>

      <div className="nav-buttons">

        <Link to="/" className="sign-in">Sign In</Link>

        <Link className="subscribe" to="/">Subscribe</Link>
      </div>

      <div className="navbar-container">
        {/* <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div> */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
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
    </nav>
  );
}
