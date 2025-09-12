import React from 'react';
import './Extracurricular.css';

const Extracurricular = () => {
  const activities = [
    {
      title: 'Nirvana Club',
      organization: 'Research Core Member',
      period: '2023 - 2024',
      description: 'Volunteered many cultural events and also anchored many events during the tenure',
      type: 'Volunteering'
    },
    {
      title: 'Nirvana Club',
      organization: 'Research Lead',
      period: '2024 - 2025',
      description: 'Encouraged students and my core members to read mythological books, extract knowledge about our ancient India and also conducted many sessions',
      type: 'Leadership'
    },
  
  ];

  return (
    <section id="extracurricular" className="section section-wrapper">
      <div className="bg-pattern"></div>
      <div className="container">
        <h2 className="section-title">Extracurricular Activities</h2>
        
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card">
              <div className="activity-header">
                <div className="activity-type">{activity.type}</div>
                <h3>{activity.title}</h3>
                <div className="activity-org">{activity.organization}</div>
                <div className="activity-period">{activity.period}</div>
              </div>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;