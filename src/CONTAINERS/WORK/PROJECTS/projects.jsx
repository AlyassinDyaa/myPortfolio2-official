import React from 'react'
import "./projects.css"

import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import IMG1 from "../../../Assets/portfolio1.png";
import IMG2 from "../../../Assets/portfolio2.png";
import IMG3 from "../../../Assets/rest.png";
import IMG4 from "../../../Assets/meta.png";
import IMG5 from "../../../Assets/netclone.png";
import IMG6 from "../../../Assets/fitness1.png";
import IMG7 from "../../../Assets/unovaFit.png";
import IMG8 from "../../../Assets/portfolio3.png";
import IMG9 from "../../../Assets/3dportfolio1.png";
import IMG10 from "../../../Assets/yd.png"
import IMG11 from "../../../Assets/nextus.png"


const cardsData = [
  {
    title: "Nextus Customs",
    imageSrc: IMG11,
    links: {
      demo: "https://nextuscustoms.com",
      github: ""
    }
  },
  {
    title: "Portfolio 1",
    imageSrc: IMG1,
    links: {
      demo: "https://alyassinprotfolio1.netlify.app",
      github: "https://github.com/AlyassinDyaa/portfolio1"
    }
  },
  {
    title: "Portfolio 2",
    imageSrc: IMG2,
    links: {
      demo: "https://alyassinportfolio2.netlify.app",
      github: "https://github.com/AlyassinDyaa/portfolio2"
    }
  },
  {
    title: "Portfolio 3",
    imageSrc: IMG8,
    links: {
      demo: "https://dyaaportfolio1.netlify.app/",
      github: ""
    }
  },
  {
    title: "Restaurant",
    imageSrc: IMG3,
    links: {
      demo: "https://alyassinrest.netlify.app",
      github: "https://github.com/AlyassinDyaa/restauarntGh"
    }
  },
  {
    title: "Your Design",
    imageSrc: IMG10,
    links: {
      demo: "https://yourdesign.vercel.app/",
      github: "https://github.com/AlyassinDyaa/yourDesign/tree/main/yd"
    }
  },
  {
    title: "NetClone",
    imageSrc: IMG5,
    links: {
      demo: "https://alyassinnetflix.netlify.app",
      github: ""
    }
  },
  {
    title: "UNOVA Fit",
    imageSrc: IMG7,
    links: {
      demo: "https://play.google.com/store/apps/details?id=com.unova_fit",
      github: "https://play.google.com/store/apps/details?id=com.unova_fit"
    }
  },

 
];

const cardsComingSoon = [
  {
    title: "Fitness",
    imageSrc: IMG6,
    links: {
      /*demo: "",
      github: ""*/
    }
  },
  {
    title: "3D Portfolio",
    imageSrc: IMG9,
    links: {
     /* demo: "https://my3dportfolio1.netlify.app/",
      github: "https://github.com/AlyassinDyaa/3dPortfolio1"*/
    }
  },
  {
    title: "MetaWorld",
    imageSrc: IMG4,
    links: {
      /*demo: "",
      github: "https://github.com/AlyassinDyaa/metaWorld"*/
    }
  },
  // add more objects as needed
];

function Card({ title, imageSrc, links }) {
  return (
    <motion.div 
      className='card-container'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >

      <div className="flip-card">

        <div className="flip-card-inner">


          <div className="flip-card-front">
          <img src={imageSrc} alt="card" className="img" />
            <p className="title" >{title}</p>
            
          </div>


          <div className="flip-card-back">
            
            
            <div className="comp">
              <div className="container__links">
                <div className="container__eye">
                  <h1>DEMO</h1>
                  <a href={links.demo} target="_blank" rel="noreferrer">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      whileHover={{ scale: 1.1, color: "violet" }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 260, 
                        damping: 20 
                      }}
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                </div>

                <div className="container__git">
                  <h1>GITHUB</h1>
                  <a href={links.github} target="_blank" rel="noreferrer">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      whileHover={{ scale: 1.1, color: "violet" }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 260, 
                        damping: 20,
                        delay: 0.1
                      }}
                      
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    
    </motion.div>
  );
}



function Work() {
  return (
    <div id='work' className='workClass'>
      
      <motion.div 
        className='container__work'
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className='container__work-title'> WEB Based PROJECTS </h1>
        <h2 className='container__work-sub'> See Demos belows</h2>
      </motion.div>


        <div className="work">
          {cardsData.map((card, index) => (
            <Card
              key={card.title}
              title={card.title}
              imageSrc={card.imageSrc}
              links={card.links}
            />
          ))}
        </div>

        <motion.div 
          className='container__work'
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
            <h1 className='container__work-title'> COMING SOON </h1>
            <h2 className='container__work-sub'> See Demos belows</h2>
      </motion.div>
      <div className="work">
          {cardsComingSoon.map((card, index) => (
            <Card
              key={card.title}
              title={card.title}
              imageSrc={card.imageSrc}
              links={card.links}
            />
          ))}
        </div>

      </div>
  );
}

export default Work;