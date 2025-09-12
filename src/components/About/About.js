import React, { useEffect, useRef } from 'react';
import './About.css';
import { useScrollAnimationMultiple } from '../../hooks/useScrollAnimation';

const About = () => {
  const addAnimatedElement = useScrollAnimationMultiple({ threshold: 0.2 });

  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '2+', label: 'Years Experience' },
   
  ];

  const interests = [
    { icon: 'fas fa-brain', title: 'Machine Learning', description: 'Building predictive models and intelligent algorithms' },
    { icon: 'fas fa-robot', title: 'Deep Learning', description: 'Creating neural networks for complex problem solving' },
    { icon: 'fas fa-comments', title: 'Natural Language Processing', description: 'Developing AI systems that understand human language' },
    { icon: 'fas fa-chart-line', title: 'Data Science', description: 'Analyzing data to drive meaningful insights and decisions' }
  ];

  return (
    <section id="about" className="section section-wrapper">
      <div className="bg-pattern"></div>
      <div className="container">
        <h2 className="section-title section-title-animate" ref={addAnimatedElement}>About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro slide-in-left" ref={addAnimatedElement}>
              <h3>Hello! I'm a passionate Data Science and AI enthusiast</h3>
              <p>
                Welcome to my portfolio! I'm Dhruv Patel, a dedicated Data Science and Machine Learning 
                enthusiast with a passion for transforming raw data into meaningful insights. My journey 
                in technology started with curiosity about how data can solve real-world problems and has 
                evolved into expertise in AI, ML, and deep learning technologies.
              </p>
              <p>
                I believe in the power of data-driven decision making, innovative AI solutions, and 
                continuous learning. Whether it's developing predictive models, implementing deep learning 
                algorithms, or creating intelligent applications, I approach every project with analytical 
                thinking and attention to detail.
              </p>
            </div>
            
            <div className="personal-details">
              <h4>Personal Details</h4>
              <div className="details-grid">
                <div className="detail-item">
                  <i className="fas fa-user"></i>
                  <span><strong>Name:</strong> Dhruv Patel</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-graduation-cap"></i>
                  <span><strong>Education:</strong> B.Tech CSE at IIIT Sricity</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span><strong>Location:</strong> India</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-envelope"></i>
                  <span><strong>Email:</strong> dhruvsp2705@gmail.com</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-phone"></i>
                  <span><strong>Phone:</strong> +91 7226019691</span>
                </div>
                
              </div>
            </div>
            
            <div className="about-actions">
              <a 
                href="/resume.pdf" 
                download="Dhruv_Patel_Resume.pdf"
                className="btn"
              >
                <i className="fas fa-download"></i>
                Download Resume
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <i className="fas fa-eye"></i>
                View Online Resume
              </a>
             
            </div>
          </div>
          
          <div className="about-visual">
            <div className="stats-container">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="interests-container">
              <h4>What I Do</h4>
              <div className="interests-grid">
                {interests.map((interest, index) => (
                  <div key={index} className="interest-item">
                    <div className="interest-icon">
                      <i className={interest.icon}></i>
                    </div>
                    <div className="interest-content">
                      <h5>{interest.title}</h5>
                      <p>{interest.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;