import React from 'react'
import { motion } from 'framer-motion'
import { HiDownload } from 'react-icons/hi'

import Time from "./TIMELINE/time"
import PROJECT from "./PROJECTS/projects"
import "./work.css"


const Work = () => {
  const CV = require("../../Assets/D'YaaAlyassinSoftwareRESUME.pdf");
  
  return (
    <div>
        <motion.div 
          className="cv-download-container"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href={CV} download="Dyaa_Alyassin_Software_Resume.pdf" className="cv-download-btn">
            <HiDownload className="cv-icon" />
            <span>Download CV</span>
          </a>
        </motion.div>
        
        <Time/>
        <PROJECT/>
    </div>
  )
}

export default Work
