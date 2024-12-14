import React from "react";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img
            src="./assets/images/logo.png" 
            alt="Logo"
            className="footer-logo"
          />
          <p className="footer-description">
            Top learning experiences that create more talent in the world.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li>Overview</li>
              <li>Features</li>
              <li>Solutions</li>
              <li>Tutorials</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About us</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Social</h4>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
              <li>Dribbble</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2024 G1-SE1-T1. All rights reserved.
        <div className="footer-social-icons">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-dribbble"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
