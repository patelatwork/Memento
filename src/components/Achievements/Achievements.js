import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: '2nd Place - Web3SSH Hackathon',
      organization: 'Blockchain Competition',
      date: '2024',
      description: 'Built a blockchain-based AI prompt marketplace using Solidity and React',
      icon: 'fas fa-trophy'
    },
    {
      title: '1st Place - Neural Odyssey',
      organization: 'College Competition',
      date: '2024',
      description: 'Developed a stroke prediction app using ML ensemble methods',
      icon: 'fas fa-medal'
    },
    {
      title: '4th Rank - Advent of Code',
      organization: 'Global Programming Challenge',
      date: '2023',
      description: 'Solved algorithmic coding challenges in Python and C++, completed 400+ expert-level cases',
      icon: 'fas fa-code'
    },
    {
      title: 'Global Game Jam Winner',
      organization: 'College Level',
      date: '2024',
      description: 'Created a 48-hour game Bubblepath with team collaboration',
      icon: 'fas fa-gamepad'
    },
    {
      title: 'Google Gen-AI Courses Completion',
      organization: 'Google',
      date: '2024',
      description: 'Completed Google Gen-AI courses, earning badges in Generative AI',
      icon: 'fas fa-certificate'
    }
  ];

  return (
    <section id="achievements" className="section section-wrapper">
      <div className="bg-pattern"></div>
      <div className="container">
        <h2 className="section-title">Achievements & Awards</h2>
        
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">
                <i className={achievement.icon}></i>
              </div>
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <div className="achievement-meta">
                  <span className="organization">{achievement.organization}</span>
                  <span className="date">{achievement.date}</span>
                </div>
                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;