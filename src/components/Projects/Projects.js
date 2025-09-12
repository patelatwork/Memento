import React from 'react';
import './Projects.css';
import { useScrollAnimationMultiple } from '../../hooks/useScrollAnimation';

const Projects = () => {
  const addAnimatedElement = useScrollAnimationMultiple({ threshold: 0.15 });

  const projects = [
    {
      id: 1,
      title: 'DemeterAi: Smart Farming Solutions',
      description: 'AI-powered tool for crop recommendation, fertilizer advice, and plant disease detection via image recognition with multilingual chatbot support.',
      image: '/demeterai.png',
      technologies: ['Python', 'Flask', 'OpenCV', 'Scikit-learn', 'TensorFlow'],
      features: ['Crop Recommendation System', 'Disease Detection via Image Processing', 'Multilingual Chatbot', 'Real-time Weather Insights'],
      githubLink: 'https://github.com/patelatwork/DemeterAi-Project',
      liveLink: '#',
      category: 'AI/ML'
    },
    {
      id: 2,
      title: 'Stroke Risk Prediction System',
      description: 'Real-time web application using Streamlit to predict stroke risk and patient health data with implemented ML pipeline.',
      image: '/stroke.png',
      technologies: ['Python', 'Streamlit', 'Scikit-learn', 'XGBoost', 'Pandas'],
      features: ['Real-time Predictions', 'ML Pipeline Implementation', 'Interactive Dashboard', 'Patient Health Analytics'],
      githubLink: 'https://github.com/patelatwork/stroke-prediction',
      liveLink: '#',
      category: 'Data Science'
    },
    {
      id: 3,
      title: 'Research Paper Q&A Tool (RAG-based)',
      description: 'Interactive chatbot using Retrieval Augmented Generation (RAG) to enable intelligent, context-aware questions about uploaded research papers.',
      image: '/rag.png',
      technologies: ['Python', 'Streamlit', 'FAISS', 'OpenAI GPT-4', 'LangChain'],
      features: ['Document Upload & Processing', 'Context-aware Q&A', 'RAG Implementation', 'Research Paper Analysis'],
      githubLink: 'https://github.com/patelatwork/Rag-Research-ai-tool',
      liveLink: '#',
      category: 'NLP/AI'
    },

  ];

  return (
    <section id="projects" className="section section-wrapper">
      <div className="bg-pattern"></div>
      <div className="container">
        <h2 className="section-title section-title-animate" ref={addAnimatedElement}>Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className={`project-card card-reveal stagger-${index + 1}`} ref={addAnimatedElement}>
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubLink} className="project-link">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <a href={project.githubLink} className="btn" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a 
            href="https://github.com/patelatwork"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <i className="fab fa-github"></i>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;