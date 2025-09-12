import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portfolio</h3>
            <p>Thank you for visiting my portfolio. Let's build something amazing together!</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/dhruv-patel-16a23628a/"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/patelatwork"><i className="fab fa-github"></i></a>
        
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Dhruv Patel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
