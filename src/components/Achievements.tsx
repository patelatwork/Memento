import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Medal, Code, Gamepad, Award } from 'lucide-react'
import './Achievements.css'

export function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const achievements = [
    {
      title: '2nd Place - Web3SSH Hackathon',
      organization: 'Blockchain Competition',
      date: '2024',
      description: 'Built a blockchain-based AI prompt marketplace using Solidity and React',
      icon: Trophy
    },
    {
      title: '1st Place - Neural Odyssey',
      organization: 'College Competition',
      date: '2024',
      description: 'Developed a stroke prediction app using ML ensemble methods',
      icon: Medal
    },
    {
      title: '4th Rank - Advent of Code',
      organization: 'Global Programming Challenge',
      date: '2023',
      description: 'Solved algorithmic coding challenges in Python and C++, completed 400+ expert-level cases',
      icon: Code
    },
    {
      title: 'Global Game Jam Winner',
      organization: 'College Level',
      date: '2024',
      description: 'Created a 48-hour game Bubblepath with team collaboration',
      icon: Gamepad
    },
    {
      title: 'Google Gen-AI Courses Completion',
      organization: 'Google',
      date: '2024',
      description: 'Completed Google Gen-AI courses, earning badges in Generative AI',
      icon: Award
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="achievements" className="achievements" ref={ref}>
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2>Achievements & Awards</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={index}
                className="achievement-card"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)" }}
              >
                <div className="achievement-icon">
                  <IconComponent size={32} />
                </div>
                <div className="achievement-content">
                  <h3>{achievement.title}</h3>
                  <div className="achievement-meta">
                    <span className="organization">{achievement.organization}</span>
                    <span className="date">{achievement.date}</span>
                  </div>
                  <p>{achievement.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
