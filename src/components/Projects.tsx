import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Projects.css'

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'DemeterAi: Smart Farming Solutions',
      description: 'AI-powered tool for crop recommendation, fertilizer advice, and plant disease detection via image recognition with multilingual chatbot support.',
      image: '',
      tags: ['Python', 'Flask', 'OpenCV', 'Scikit-learn', 'TensorFlow'],
      github: 'https://github.com/patelatwork/DemeterAi-Project',
      category: 'AI/ML',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
    {
      title: 'Stroke Risk Prediction System',
      description: 'Real-time web application using Streamlit to predict stroke risk and patient health data with implemented ML pipeline.',
      image: '',
      tags: ['Python', 'Streamlit', 'Scikit-learn', 'XGBoost', 'Pandas'],
      github: 'https://github.com/patelatwork/stroke-prediction',
      category: 'Data Science',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      title: 'Research Paper Q&A Tool (RAG-based)',
      description: 'Interactive chatbot using Retrieval Augmented Generation (RAG) to enable intelligent, context-aware questions about uploaded research papers.',
     image: '',
      tags: ['Python', 'Streamlit', 'FAISS', 'OpenAI GPT-4', 'LangChain'],
      github: 'https://github.com/patelatwork/Rag-Research-ai-tool',
      category: 'NLP/AI',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.01, 0.05, 0.95]
      }
    }
  }

  return (
    <section id="projects" className="projects" ref={ref}>
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2>Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Some of my recent work that showcases my skills and creativity
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image" style={{ background: project.color }}>
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View on GitHub</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div className="projects-cta text-center mt-12" variants={itemVariants}>
          <p className="text-lg mb-4">Interested in more of my work?</p>
          <motion.a
            href="https://github.com/patelatwork"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
