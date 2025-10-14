import React from 'react'
import { motion } from 'framer-motion'
import "./hobbies.css"

import { FaSwimmer, FaRunning, FaBook, FaGamepad, FaFutbol } from 'react-icons/fa'
import { GiKimono } from 'react-icons/gi'

import image1 from "../../Assets/hobbiesList/highRes/swimming.jpg"
import image2 from "../../Assets/hobbiesList/highRes/tkd.jpg"
import image3 from "../../Assets/hobbiesList/highRes/running.jpg"
import image4 from "../../Assets/hobbiesList/highRes/dcomics.jpg"
import image5 from "../../Assets/hobbiesList/highRes/gaming.jpg"
import image6 from "../../Assets/hobbiesList/swimming2.jpg"
import image7 from "../../Assets/hobbiesList/soccer.jpg"

const Hobbies = () => {
  const hobbiesData = [
    {
      title: "Swimming",
      icon: <FaSwimmer />,
      image: image6,
      description: "Diving into the water, finding peace and strength with every stroke."
    },
    {
      title: "Taekwondo",
      icon: <GiKimono />,
      image: image2,
      description: "Mastering discipline, focus, and the art of self-defense."
    },
    {
      title: "Running",
      icon: <FaRunning />,
      image: image3,
      description: "Pushing limits, clearing the mind, one mile at a time."
    },
    {
      title: "Comics",
      icon: <FaBook />,
      image: image4,
      description: "Creating worlds and characters through art and storytelling."
    },
    {
      title: "Gaming",
      icon: <FaGamepad />,
      image: image5,
      description: "Exploring virtual worlds and solving complex challenges."
    },
    {
      title: "Soccer",
      icon: <FaFutbol />,
      image: image7,
      description: "Teamwork, strategy, and the thrill of the game."
    }
  ];

  return (
    <div className='hobbies-container'>
      {/* Hero Section */}
      <motion.section 
        className="hobbies-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hobbies-hero-content">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My Passions & Hobbies
          </motion.h1>
          <motion.p
            className="hobbies-hero-quote"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            "Life is like a pencil, it may have a sharp point or may be broken, 
            but it's up to us to keep writing our own story."
          </motion.p>
          <motion.p
            className="hobbies-hero-description"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Beyond coding and technology, I believe in a balanced life filled with 
            activities that challenge both body and mind. Here's what keeps me inspired.
          </motion.p>
        </div>
        <div className="hobbies-hero-overlay"></div>
      </motion.section>

      {/* Hobbies Grid */}
      <section className="hobbies-grid-section">
        <div className="hobbies-grid">
          {hobbiesData.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              className="hobby-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="hobby-card-image" style={{ backgroundImage: `url(${hobby.image})` }}>
                <div className="hobby-card-overlay"></div>
              </div>
              <div className="hobby-card-content">
                <div className="hobby-icon">
                  {hobby.icon}
                </div>
                <h3>{hobby.title}</h3>
                <p>{hobby.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <motion.section 
        className="hobbies-philosophy"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Why Hobbies Matter</h2>
        <div className="philosophy-grid">
          <motion.div 
            className="philosophy-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Balance</h3>
            <p>Maintaining a healthy work-life balance through diverse activities</p>
          </motion.div>
          <motion.div 
            className="philosophy-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Growth</h3>
            <p>Constantly learning and improving in different areas of life</p>
          </motion.div>
          <motion.div 
            className="philosophy-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Creativity</h3>
            <p>Expressing ideas and emotions through various mediums</p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Hobbies
