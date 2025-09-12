import React, { useState, useEffect } from 'react';
import './Skills.css';
import { useScrollAnimationMultiple } from '../../hooks/useScrollAnimation';

const Skills = () => {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const addAnimatedElement = useScrollAnimationMultiple({ threshold: 0.2 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
    { name: 'TensorFlow', icon: 'fas fa-network-wired', color: '#FF6F00' },
    { name: 'Keras', icon: 'fas fa-layer-group', color: '#D00000' },
    { name: 'PyTorch', icon: 'fas fa-fire', color: '#EE4C2C' },
    { name: 'Pandas', icon: 'fas fa-table', color: '#150458' },
    { name: 'NumPy', icon: 'fas fa-calculator', color: '#013243' },
    { name: 'Matplotlib', icon: 'fas fa-chart-line', color: '#11557C' },
    { name: 'Seaborn', icon: 'fas fa-chart-bar', color: '#388E3C' },
    { name: 'Plotly', icon: 'fas fa-chart-area', color: '#636EFA' },
    { name: 'Scikit-learn', icon: 'fas fa-cogs', color: '#F7931E' },
    { name: 'SHAP', icon: 'fas fa-search-plus', color: '#FF6B6B' },
    { name: 'Scipy', icon: 'fas fa-square-root-alt', color: '#8CAAE6' },
    { name: 'Statsmodels', icon: 'fas fa-chart-pie', color: '#5D4E75' },
    { name: 'Optuna', icon: 'fas fa-sliders-h', color: '#56CCF2' },
    { name: 'OpenCV', icon: 'fas fa-eye', color: '#5C3EE8' },
    { name: 'NLTK', icon: 'fas fa-language', color: '#2E7D32' },
    { name: 'spaCy', icon: 'fas fa-comments', color: '#09A3D5' },
    { name: 'Gensim', icon: 'fas fa-project-diagram', color: '#FF7043' },
    { name: 'Pydantic', icon: 'fas fa-check-circle', color: '#E92063' },
    { name: 'LangChain', icon: 'fas fa-link', color: '#1C3F60' },
    { name: 'LangGraph', icon: 'fas fa-sitemap', color: '#4CAF50' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
    { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47A248' },
    { name: 'Express', icon: 'fas fa-server', color: '#000000' },
    { name: 'SQL', icon: 'fas fa-database', color: '#336791' }
  ];

  const softSkills = [
    { name: 'Problem Solving' },
    { name: 'Team Collaboration' },
    { name: 'Communication' },
    { name: 'Leadership' },
    { name: 'Time Management' },
    { name: 'Adaptability' }
  ];

  const tools = [
    { name: 'Jupyter Notebook', icon: 'fas fa-book' },
    { name: 'Google Colab', icon: 'fab fa-google' },
    { name: 'Streamlit', icon: 'fas fa-chart-line' },
    { name: 'Flask', icon: 'fas fa-flask' },
    { name: 'Hugging Face', icon: 'fas fa-smile' },
    { name: 'GitHub', icon: 'fab fa-github' },
    { name: 'FastAPI', icon: 'fas fa-rocket' }
  ];

  const languages = [
    { name: 'Gujarati', level: 'Native', flag: 'gu' },
    { name: 'English', level: 'Fluent', flag: 'en' },
    { name: 'Hindi', level: 'Basic', flag: 'hi' },
    
  ];

  const SkillTag = ({ skill, index }) => (
    <div className="skill-tag" style={{ animationDelay: `${index * 0.1}s` }}>
      {skill.icon && <i className={skill.icon} style={{ color: skill.color }}></i>}
      <span className="skill-name">{skill.name}</span>
    </div>
  );

  return (
    <section id="skills" className="section section-wrapper">
      <div className="bg-pattern"></div>
      <div className="container">
        <h2 className="section-title section-title-animate" ref={addAnimatedElement}>Skills & Expertise</h2>
        
        <div className="skills-content">
          <div className="skills-categories">
            <div className="skills-category slide-in-left" ref={addAnimatedElement}>
              <h3 className="category-title">
                <i className="fas fa-laptop-code"></i>
                Technical Skills
              </h3>
              <div className="skills-tags">
                {technicalSkills.map((skill, index) => (
                  <SkillTag 
                    key={skill.name} 
                    skill={skill} 
                    index={index} 
                  />
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">
                <i className="fas fa-users"></i>
                Soft Skills
              </h3>
              <div className="skills-tags">
                {softSkills.map((skill, index) => (
                  <SkillTag 
                    key={skill.name} 
                    skill={skill} 
                    index={index} 
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="additional-skills">
            <div className="tools-section">
              <h3 className="category-title">
                <i className="fas fa-tools"></i>
                Tools & Technologies
              </h3>
              <div className="tools-grid">
                {tools.map((tool, index) => (
                  <div key={tool.name} className="tool-item">
                    <div className="tool-icon">
                      <i className={tool.icon}></i>
                    </div>
                    <span className="tool-name">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="languages-section">
              <h3 className="category-title">
                <i className="fas fa-globe"></i>
                Languages
              </h3>
              <div className="languages-grid">
                {languages.map((language, index) => (
                  <div key={language.name} className="language-item">
                    <div className="language-flag">{language.flag}</div>
                    <div className="language-info">
                      <span className="language-name">{language.name}</span>
                      <span className="language-level">{language.level}</span>
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

export default Skills;