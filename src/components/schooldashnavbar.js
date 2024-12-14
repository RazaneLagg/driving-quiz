import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/dashnavbar.css';

const DashNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    console.log(isMenuOpen); 
    setIsMenuOpen(!isMenuOpen);
  };
  

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div class="main-content">

    <div className="navbar dashboard-navbar">
      <div className="logo-search">
        <div className="logo">
          <img src="/assets/images/logo.png" alt="Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/dashboard/statistics" onClick={closeMenu}>Statistics</Link>
        <Link to="/dashboard/students" onClick={closeMenu}>Students</Link>
        <Link to="/dashboard/mentors" onClick={closeMenu}>Mentors</Link>
        <Link to="/dashboard/quizzes-courses" onClick={closeMenu}>Quizzes & Courses</Link>
        <Link to="/dashboard/profile-settings" onClick={closeMenu}>Profile Settings</Link>
      </div>

      <div className="profile-icon">
        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile" />
      </div>

      <button
        className={`hamburger ${isMenuOpen ? 'open' : ''}`}
        onClick={handleToggleMenu}
        aria-label="Toggle navigation menu"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
    </div>
    </div>
  );
};

export default DashNavbar;
