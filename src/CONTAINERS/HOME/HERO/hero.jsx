import React from 'react'
import "./hero.css"
import CTA from "../../../Components/callToAction"
import ME from "../../../Assets/dyaa.png"
import { motion } from "framer-motion"
 
const hero = () => {
  return (
    <div className='container__home ' id='work'>
      <div className='home_build'>
        
        <motion.div 
          className='heading'
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}>
            <h1>D'Yaa Alyassin</h1>
            <h2>  Welcome to my Portfolio</h2>
            <CTA/>
          
        </motion.div>

        <motion.div 
          className='container__image-box'
          animate={{ y: 0 }}
          transition={{ duration: 1 }}>
          <div className='imgD'>
            <img src= {ME} className='imgDyaa' placeholder='dyaa' alt='img'/>
          </div> 
        </motion.div>

      </div>
  </div>
    
  )
}

export default hero
