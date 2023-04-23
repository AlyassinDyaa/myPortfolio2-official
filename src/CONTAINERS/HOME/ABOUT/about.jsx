import { useInView } from 'react-intersection-observer';
import React from 'react'
import "./about.css"
import IMG from "../../../Assets/ab.jpg"
import {motion} from "framer-motion"

// Animation for the image
const imageAnimation = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1 }
};

// Animation for the text
const textAnimation = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 1, delay: 0.2 }
};

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <div className="container" id="about" ref={ref}>
      {/* ONE ANIMATE
       <motion.div 
        className="image-container"
        variants={imageAnimation}
        initial='initial'
        animate='animate'
        transition='transition'>
        <img src={IMG} alt="Profile" />
      </motion.div> */}

        {/*  KEEP ANIMATING 
       <motion.div 
        className="image-container"
        variants={imageAnimation}
        initial='initial'
        animate='animate'
        transition='transition'>
        <img src={IMG} alt="Profile" />
      </motion.div> */}

      <motion.div
        className="image-container"
       variants={imageAnimation}
        initial='initial'
        animate='animate'
        transition='transition'>
      
        <img src={IMG} alt="Profile" />
      </motion.div>

      <motion.div
        className="content-container"
        variants={textAnimation}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        transition={textAnimation.transition}
      >
        <h1 className="title" style={{  opacity: 80 }}>
          About Me
        </h1>
        <h2 className="subtitle">Motivation</h2>
        <p className="description">
          " Dynamic and motivated individual that builds and manages projects
          from concept to designing all the way to completion. I utilize my
          experience to always increase my knowledge whilst offering value. I am
          seeking a role of a software developer. "
        </p>
      </motion.div>
    </div>
  );
};

export default About;
