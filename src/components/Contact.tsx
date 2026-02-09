import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'
import './Contact.css'

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const form = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')

  const contactInfo = [
    { icon: <Mail size={24} />, label: 'Email', value: 'dhruvsp2705@gmail.com', href: 'mailto:dhruvsp2705@gmail.com' },
    { icon: <Phone size={24} />, label: 'Phone', value: '+91 7226019691', href: 'tel:+917226019691' },
    { icon: <MapPin size={24} />, label: 'Location', value: 'India', href: '#' },
  ]

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    // EmailJS configuration - Replace with your actual credentials or use .env file
    const serviceId = 'YOUR_SERVICE_ID'
    const templateId = 'YOUR_TEMPLATE_ID'
    const publicKey = 'YOUR_PUBLIC_KEY'

    if (!form.current) return

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setMessage("Message sent successfully! I'll get back to you soon.")
        setMessageType('success')
        form.current?.reset()
      })
      .catch((error) => {
        console.error('EmailJS Error:', error)
        setMessage('Failed to send message. Please email me directly at dhruvsp2705@gmail.com')
        setMessageType('error')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

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
    <section id="contact" className="contact" ref={ref}>
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2>Get In Touch</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-info-section" variants={itemVariants}>
            <h3>Let's Connect</h3>
            <div className="contact-info-cards">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="info-card"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-text">
                    <div className="info-label">{info.label}</div>
                    <div className="info-value">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/dhruv-patel-16a23628a/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/patelatwork" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://leetcode.com/u/dhruvpatel93/" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div className="contact-form-section" variants={itemVariants}>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              {message && (
                <div className={`form-message ${messageType}`}>
                  <i className={`fas ${messageType === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle'}`}></i>
                  {message}
                </div>
              )}
              
              <div className="form-group">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  disabled={isLoading}
                ></textarea>
              </div>

              <input type="hidden" name="to_phone" value="7226019691" />

              <motion.button
                type="submit"
                className="btn btn-submit"
                disabled={isLoading}
                whileHover={{ scale: isLoading ? 1 : 1.05 }}
                whileTap={{ scale: isLoading ? 1 : 0.95 }}
              >
                {isLoading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
