import React from 'react';
import './Education.css';
import { useScrollAnimationMultiple } from '../../hooks/useScrollAnimation';

const Education = () => {
  const addAnimatedElement = useScrollAnimationMultiple({ threshold: 0.2 });

  const educationData = [
    {
      id: 1,
      degree: 'Higher Secondary Education (12th Grade)',
      institution: 'Shri Vardhaman Vidhyalaya',
      location: 'Mehsana, Gujarat, India',
      duration: '2021 - 2023',
      description: 'Completed higher secondary education with focus on Science stream, building strong foundation in Mathematics and Science.',
      achievements: [
        'Science Stream - PCM (Physics, Chemistry, Mathematics)',
        'Strong foundation in Mathematics and analytical thinking',
        'Developed interest in computer science and programming',
        'Participated in various academic competitions'
      ]
    },
    {
      id: 2,
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Indian Institute of Information Technology, Sricity',
      location: 'Andhra Pradesh, India',
      duration: '2023 - 2027',
      gpa: '9.49/10.0',
      description: 'Currently pursuing B.Tech in Computer Science and Engineering with excellent academic performance.',
      achievements: [
        'Current CGPA: 9.49/10.0',
        'Specialization in Data Science and AI',
        'Active in coding competitions and hackathons',
        'Research focus on time series forecasting for multivariate scenario'
      ]
    }
  ];

  return (
    <section id="education" className="section section-wrapper">
      <div className="bg-pattern"></div>
      <div className="container">
        <h2 className="section-title section-title-animate" ref={addAnimatedElement}>Education & Qualifications</h2>
        
        <div className="education-content">
          <div className="education-timeline">
            <h3 className="subsection-title fade-in" ref={addAnimatedElement}>Academic Background</h3>
            <div className="timeline">
              {educationData.map((edu, index) => (
                <div key={edu.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} card-reveal stagger-${index + 1}`} ref={addAnimatedElement}>
                  <div className="timeline-content">
                    <div className="education-card">
                      <div className="card-header">
                        <div className="degree-info">
                          <h4>{edu.degree}</h4>
                          <div className="institution">
                            <i className="fas fa-university"></i>
                            <span>{edu.institution}</span>
                          </div>
                          <div className="education-meta">
                            <div className="duration">
                              <i className="fas fa-calendar-alt"></i>
                              <span>{edu.duration}</span>
                            </div>
                            <div className="location">
                              <i className="fas fa-map-marker-alt"></i>
                              <span>{edu.location}</span>
                            </div>
                            <div className="gpa">
                              <i className="fas fa-star"></i>
                              <span>GPA: {edu.gpa}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card-body">
                        <p className="description">{edu.description}</p>
                        
                        <div className="achievements">
                          <h5>Key Achievements</h5>
                          <ul>
                            {edu.achievements.map((achievement, idx) => (
                              <li key={idx}>
                                <i className="fas fa-trophy"></i>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-marker">
                    <div className="marker-content">
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;