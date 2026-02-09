import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap } from 'lucide-react'
import './Education.css'

export function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const educationData = [
    {
      id: 1,
      degree: 'Higher Secondary Education (11th-12th Grade)',
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
    <section id="education" className="education" ref={ref}>
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2>Education & Qualifications</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
            >
              <div className="timeline-content">
                <div className="education-card">
                  <div className="card-icon">
                    <GraduationCap size={32} />
                  </div>
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <div className="education-meta">
                    <span><i className="fas fa-calendar-alt"></i> {edu.duration}</span>
                    <span><i className="fas fa-map-marker-alt"></i> {edu.location}</span>
                    {edu.gpa && <span className="gpa"><i className="fas fa-star"></i> CGPA: {edu.gpa}</span>}
                  </div>
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
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
