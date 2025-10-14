import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "./contact.css";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs" 
import { AiFillInstagram, AiFillMail, AiFillPhone } from "react-icons/ai"
import { HiLocationMarker } from "react-icons/hi"
import { MdSend } from "react-icons/md"

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Web3Forms configuration
    // Get your FREE access key from: https://web3forms.com
    // Just enter dyaaalyassin99@gmail.com and get your key!
    const accessKey = "0a8f230d-9c85-46c4-88fe-e93a8d378b1e"; // Replace this with your access key from web3forms.com

    const formDataToSend = {
      access_key: accessKey,
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      from_name: formData.name,
      replyto: formData.email
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formDataToSend)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(''), 5000);
      } else {
        console.error('Form submission error:', result);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(''), 5000);
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='container__contact' id='contact'>
      <motion.div 
        className="contact-wrapper"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-header">
          <motion.h1 
            className="contact-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Connect
          </motion.h1>
          <motion.p 
            className="contact-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Have a question or want to work together? I'd love to hear from you!
          </motion.p>
        </div>

        <div className='contact-content'>
          <motion.div 
            className='contact-info-section'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="info-title">Get in Touch</h2>
            
            <div className="contact-info-items">
              <div className="info-item">
                <div className="info-icon">
                  <AiFillMail />
                </div>
                <div className="info-text">
                  <h3>Email</h3>
                  <a href="mailto:dyaaalyassin99@gmail.com">dyaaalyassin99@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <AiFillPhone />
                </div>
                <div className="info-text">
                  <h3>Phone</h3>
                  <p>+1 518 952 5899</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <HiLocationMarker />
                </div>
                <div className="info-text">
                  <h3>Location</h3>
                  <p>Niskayuna, NY 12309</p>
                </div>
              </div>
            </div>

            <div className='social-links'>
              <h3>Follow Me</h3>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/d-yaa-a-1b56b9144/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <BsLinkedin />
                </a>
                <a href="https://github.com/AlyassinDyaa" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <BsGithub />
                </a>
                <a href="https://www.facebook.com/dyaa.alyassin/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <BsFacebook />
                </a>
                <a href="https://www.instagram.com/dyaa_alyassin/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <AiFillInstagram />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className='contact-form-section'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <form onSubmit={sendEmail} className="modern-contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  name="message" 
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <motion.div 
                  className="status-message success"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  className="status-message error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✗ Oops! Something went wrong. Please try again.
                </motion.div>
              )}

              <motion.button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <MdSend />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
