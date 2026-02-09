import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, MapPin, User, GraduationCap } from 'lucide-react'
import './About.css'

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  const stats = [
    { value: '10+', label: 'Projects Completed' },
    { value: '2+', label: 'Years Experience' },
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2>About Me</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--primary-blue)' }}>
              Hello! I'm Dhruv Patel
            </h3>
            <p className="about-intro mb-4">
              I'm a passionate Data Science and Machine Learning enthusiast dedicated to transforming 
              raw data into meaningful insights. My journey in technology started with curiosity about 
              how data can solve real-world problems and has evolved into expertise in AI, ML, and deep learning.
            </p>
            <p className="mb-6">
              I believe in data-driven decision making and innovative AI solutions. Whether developing 
              predictive models, implementing deep learning algorithms, or creating intelligent applications, 
              I approach every project with analytical thinking and attention to detail.
            </p>

            <div className="personal-details bg-white/50 p-6 rounded-lg mb-6">
              <h4 className="text-xl font-bold mb-4" style={{ color: 'var(--primary-blue)' }}>Personal Details</h4>
              <div className="details-grid grid gap-4">
                <div className="detail-item flex gap-3 items-center">
                  <User size={20} className="text-blue-600" />
                  <span><strong>Name:</strong> Dhruv Patel</span>
                </div>
                <div className="detail-item flex gap-3 items-center">
                  <GraduationCap size={20} className="text-blue-600" />
                  <span><strong>Education:</strong> B.Tech CSE at IIIT Sricity</span>
                </div>
                <div className="detail-item flex gap-3 items-center">
                  <MapPin size={20} className="text-blue-600" />
                  <span><strong>Location:</strong> India</span>
                </div>
                <div className="detail-item flex gap-3 items-center">
                  <Mail size={20} className="text-blue-600" />
                  <span><strong>Email:</strong> dhruvsp2705@gmail.com</span>
                </div>
                <div className="detail-item flex gap-3 items-center">
                  <Phone size={20} className="text-blue-600" />
                  <span><strong>Phone:</strong> +91 7226019691</span>
                </div>
              </div>
            </div>
            
            <div className="about-actions">
              <motion.a
                href="/resume.pdf"
                download="Dhruv_Patel_Resume.pdf"
                className="btn btn-download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-download" style={{ marginRight: '0.75rem' }}></i>
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          <motion.div className="about-visual" variants={itemVariants}>
            <div className="stats-container">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="stat-card text-center p-6 bg-white rounded-lg shadow-lg"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)"
                  }}
                >
                  <div className="stat-value text-4xl font-bold mb-2" style={{ color: 'var(--primary-blue)' }}>
                    {stat.value}
                  </div>
                  <div className="stat-label text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="interests-grid mt-8">
              <div className="interest-item p-4 bg-white rounded-lg shadow">
                <i className="fas fa-brain text-3xl mb-2" style={{ color: 'var(--primary-blue)' }}></i>
                <h4 className="font-bold">Machine Learning</h4>
                <p className="text-sm text-gray-600">Building predictive models and intelligent algorithms</p>
              </div>
              <div className="interest-item p-4 bg-white rounded-lg shadow">
                <i className="fas fa-robot text-3xl mb-2" style={{ color: 'var(--primary-blue)' }}></i>
                <h4 className="font-bold">Deep Learning</h4>
                <p className="text-sm text-gray-600">Creating neural networks for complex problem solving</p>
              </div>
              <div className="interest-item p-4 bg-white rounded-lg shadow">
                <i className="fas fa-server text-3xl mb-2" style={{ color: 'var(--primary-blue)' }}></i>
                <h4 className="font-bold">Backend Engineering</h4>
                <p className="text-sm text-gray-600">Building robust server-side applications and APIs</p>
              </div>
              <div className="interest-item p-4 bg-white rounded-lg shadow">
                <i className="fas fa-chart-line text-3xl mb-2" style={{ color: 'var(--primary-blue)' }}></i>
                <h4 className="font-bold">Data Science</h4>
                <p className="text-sm text-gray-600">Analyzing data to drive meaningful insights and decisions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
