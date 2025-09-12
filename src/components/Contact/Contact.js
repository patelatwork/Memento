import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  // EmailJS Configuration
  const EMAILJS_CONFIG = {
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    // Debug log to check configuration
    console.log('EmailJS Config:', {
      serviceId: EMAILJS_CONFIG.serviceId,
      templateId: EMAILJS_CONFIG.templateId,
      publicKey: EMAILJS_CONFIG.publicKey ? 'SET' : 'NOT SET'
    });

    // Validate configuration
    if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
      setMessage('Email service not properly configured. Please contact me directly at dhruvsp2705@gmail.com');
      setMessageType('error');
      setIsLoading(false);
      return;
    }

    emailjs.sendForm(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      form.current,
      EMAILJS_CONFIG.publicKey
    )
    .then((result) => {
      console.log('SUCCESS!', result.text);
      setMessage('Message sent successfully! I\'ll get back to you soon.');
      setMessageType('success');
      form.current.reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      let errorMessage = 'Failed to send message. ';
      
      if (error.status === 400) {
        errorMessage += 'Invalid template or service configuration. ';
      } else if (error.status === 401) {
        errorMessage += 'Authentication failed. ';
      } else if (error.status === 403) {
        errorMessage += 'Service access denied. ';
      } else if (error.status === 404) {
        errorMessage += 'Service or template not found. ';
      }
      
      errorMessage += 'Please email me directly at dhruvsp2705@gmail.com';
      setMessage(errorMessage);
      setMessageType('error');
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <section id="contact" className="section section-wrapper">
      <div className="bg-pattern"></div>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always open to discussing new opportunities and interesting projects.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>dhruvsp2705@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+91 7226011969</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>India</span>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://www.linkedin.com/in/dhruv-patel-your-profile" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/patelatwork" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://leetcode.com/u/dhruvpatel93/" target="_blank" rel="noopener noreferrer" className="social-link leetcode-link">
                <img src="/leetcode-logo.svg" alt="LeetCode" className="leetcode-logo" />
              </a>
            </div>
          </div>
          
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              {message && (
                <div className={`form-message ${messageType}`}>
                  <i className={`fas ${messageType === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle'}`}></i>
                  {message}
                  {messageType === 'error' && (
                    <div className="alternative-contact">
                      <p>Alternative: <a href="mailto:dhruvsp2705@gmail.com?subject=Portfolio Contact&body=Hi Dhruv,%0D%0A%0D%0A[Your message here]" className="email-link">Click here to open your email client</a></p>
                    </div>
                  )}
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
                  rows="5" 
                  required
                  disabled={isLoading}
                ></textarea>
              </div>
              
              {/* Hidden field for your phone number */}
              <input type="hidden" name="to_phone" value="7226011969" />
              
              <button type="submit" className="btn" disabled={isLoading}>
                <i className={`fas ${isLoading ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;