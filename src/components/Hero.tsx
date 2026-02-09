import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { NetworkAnimation } from './network-animation'
import './Hero.css'
import { useState, useEffect } from 'react'

export function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0)
  const titles = [
    'Data Science Fanatic',
    'Machine Learning Enthusiast',
    'Gen-AI Developer',
    'Deep Learning Zealot',
    'Problem Solver',
    'Creative Thinker'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToContent = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const text = "Hi I'm Dhruv Patel"
  
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: [0.6, 0.01, 0.05, 0.95]
      }
    })
  }

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95]
      }
    })
  }

  return (
    <section id="home" className="hero">
      <main className="w-full flex flex-col items-center justify-center h-screen overflow-hidden">
        <NetworkAnimation 
          backgroundColor="#1e40af"
          heartSpeed={25}
          maxDistance={180}
          minDistance={70}
        />
        
        {/* Hero Content */}
        <div className="absolute z-10 flex flex-col items-center justify-center gap-6">
          <motion.div 
            className="hero-text"
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className="hero-name-animated">
              {text.split('').map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="hero-letter"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.div 
              className="hero-divider"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 80, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            ></motion.div>
            
            <motion.div 
              className="hero-subtitle"
              custom={text.length}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="text-white text-2xl">I'm a </span>
              <motion.span 
                key={currentTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="rotating-text text-2xl font-bold text-blue-200"
              >
                {titles[currentTitle]}
              </motion.span>
            </motion.div>

            

            {/* Social Links */}
            <motion.div 
              className="hero-social flex gap-6 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <a 
                href="https://www.linkedin.com/in/dhruv-patel-16a23628a/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
              >
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
              <a 
                href="https://github.com/patelatwork" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a 
                href="https://leetcode.com/u/dhruvpatel93/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.button
          className="scroll-indicator"
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.button>
      </main>
    </section>
  )
}
