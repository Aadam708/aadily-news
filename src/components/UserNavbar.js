import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faHome, faBriefcase, faLaptop, faChartLine, faComments, faDollarSign, faCompass, faVideo } from '@fortawesome/free-solid-svg-icons';
import './UserNavbar.css';

export default function UserNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="navbar-logo">
          AADILY UK
        </Link>
      </div>

      <div className="nav-buttons">
        <div className="profile-menu" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/personal-details" className="dropdown-item">Personal Details</Link>
              <Link to="/account-settings" className="dropdown-item">Account Settings</Link>
              <Link to="/subscription" className="dropdown-item">Subscription</Link>
              <Link to="/logout" className="dropdown-item">Logout</Link>
            </div>
          )}
        </div>
      </div>

      <div className="navbar-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="#" className="nav-links">
              <FontAwesomeIcon icon={faHome} /> Politics
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-links">
              <FontAwesomeIcon icon={faBriefcase} /> Business
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-links">
              <FontAwesomeIcon icon={faLaptop} /> Technology
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-links">
              <FontAwesomeIcon icon={faChartLine} /> Markets
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-links">
              <FontAwesomeIcon icon={faComments} /> Opinion
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-links">
              <FontAwesomeIcon icon={faDollarSign} /> Wealth
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-links">
              <FontAwesomeIcon icon={faCompass} /> Pursuits
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-links">
              <FontAwesomeIcon icon={faVideo} /> Videos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
