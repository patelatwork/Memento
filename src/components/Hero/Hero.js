import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    'Data Science Fanatic',
    'Machine Learning Enthusiast',
    'Gen-AI Developer',
    'Deep Learning Zialot',
    'Problem Solver',
    'Creative Thinker'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-element floating-circle" style={{ top: '10%', right: '10%' }}></div>
        <div className="floating-element floating-square" style={{ bottom: '20%', left: '5%' }}></div>
        <div className="floating-element floating-triangle" style={{ top: '60%', right: '20%' }}></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title fade-in">
              Hello, I'm <span className="highlight">Dhruv Patel</span>
            </h1>
            
            <div className="hero-subtitle slide-in-left">
              <span>I'm a </span>
              <span className="rotating-text">
                {titles[currentTitle]}
              </span>
            </div>
            
            <p className="hero-description fade-in">
              Passionate about creating innovative solutions and bringing ideas to life through code. 
              Welcome to my digital portfolio where creativity meets functionality.
            </p>
            
            <div className="hero-buttons slide-in-right">
              <a 
                href="https://github.com/patelatwork"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View My Work
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn btn-outline"
              >
                Get In Touch
              </button>
            </div>
            
            <div className="hero-social">
              <a href="https://www.linkedin.com/in/dhruv-patel-your-profile" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/patelatwork" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://leetcode.com/u/dhruvpatel93/" target="_blank" rel="noopener noreferrer" className="social-link leetcode-link" aria-label="LeetCode">
                <img src="/leetcode-logo.svg" alt="LeetCode" className="leetcode-logo" />
              </a>
             
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-container">
              <div className="image-placeholder">
                <img src="/dhruv.jpg" alt="Dhruv Patel" className="profile-photo" />
              </div>
              <div className="image-decoration decoration-1"></div>
              <div className="image-decoration decoration-2"></div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow">
            <i className="fas fa-chevron-down"></i>
          </div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;