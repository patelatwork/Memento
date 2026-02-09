import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Skills.css'

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    { name: 'SQL', icon: 'fas fa-database', color: '#336791' },
    { name: 'Redis', icon: 'fas fa-database', color: '#DC382D' },
    { name: 'REST APIs', icon: 'fas fa-plug', color: '#6DB33F' }
  ]

  const softSkills = [
    { name: 'Problem Solving' },
    { name: 'Team Collaboration' },
    { name: 'Communication' },
    { name: 'Leadership' },
    { name: 'Time Management' },
    { name: 'Adaptability' }
  ]

  const tools = [
    { name: 'Jupyter Notebook', icon: 'fas fa-book' },
    { name: 'Google Colab', icon: 'fab fa-google' },
    { name: 'Streamlit', icon: 'fas fa-chart-line' },
    { name: 'Flask', icon: 'fas fa-flask' },
    { name: 'Hugging Face', icon: 'fas fa-smile' },
    { name: 'GitHub', icon: 'fab fa-github' },
    { name: 'FastAPI', icon: 'fas fa-rocket' }
  ]

  const languages = [
    { name: 'Gujarati', level: 'Native' },
    { name: 'English', level: 'Fluent' },
    { name: 'Hindi', level: 'Basic' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="skills" className="skills" ref={ref}>
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2>Skills & Expertise</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="skills-content">
          {/* Technical Skills */}
          <motion.div className="skills-category" variants={itemVariants}>
            <h3 className="category-title">
              <i className="fas fa-laptop-code"></i>
              Technical Skills
            </h3>
            <div className="skills-tags">
              {technicalSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="skill-tag"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <i className={skill.icon} style={{ color: skill.color }}></i>
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div className="skills-category" variants={itemVariants}>
            <h3 className="category-title">
              <i className="fas fa-users"></i>
              Soft Skills
            </h3>
            <div className="skills-tags">
              {softSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="skill-tag"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div className="skills-category" variants={itemVariants}>
            <h3 className="category-title">
              <i className="fas fa-tools"></i>
              Tools & Technologies
            </h3>
            <div className="tools-grid">
              {tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  className="tool-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="tool-icon">
                    <i className={tool.icon}></i>
                  </div>
                  <span className="tool-name">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div className="skills-category" variants={itemVariants}>
            <h3 className="category-title">
              <i className="fas fa-globe"></i>
              Languages
            </h3>
            <div className="languages-grid">
              {languages.map((lang) => (
                <motion.div
                  key={lang.name}
                  className="language-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="language-name">{lang.name}</span>
                  <span className="language-level">{lang.level}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
