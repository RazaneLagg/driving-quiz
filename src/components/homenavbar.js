import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/homenavbar.css'; 

const HomeNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/assets/images/logo.png" alt="Logo" />
      </div>

      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#welcome-section" onClick={closeMenu}>Home</a>
        <a href="#aboutus-section" onClick={closeMenu}>About us</a>
        <a href="#service-section" onClick={closeMenu}>Services</a>
        <a href="#course-section" onClick={closeMenu}>Courses</a>
        <a href="#mentor-section" onClick={closeMenu}>Mentors</a>
        <a href="#school-section" onClick={closeMenu}>School</a>
        <a href="#benefits-section" onClick={closeMenu}>Benefits</a>
        <a href="#faq-section" onClick={closeMenu}>FAQ’s</a>
        <a href="#contactus-section" onClick={closeMenu}>Contact us</a>
        <div className="auth-buttons">
          <Link to="/login" onClick={closeMenu}>
            <button className="login-btn">Log in</button>
          </Link>
          <Link to="/signup" onClick={closeMenu}>
            <button className="signup-btn">Create account</button>
          </Link>
        </div>
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
  );
};

export default HomeNavbar;
