import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import $ from 'jquery';
import "./head.css";
import JUST from "../../../Assets/edu/just.mp4";
import JUSTB from "../../../Assets/edu/background.png";

const Head = () => {
  const [curPage, setCurPage] = useState(1); // State variable for current page
  const numOfPages = 3; // Total number of pages
  const [isMobile, setIsMobile] = useState(false);

  const navigateUp = () => {
    if (curPage > 1) {
      setCurPage(prevPage => prevPage - 1); // Decrease current page by 1
    }
  };

  const navigateDown = () => {
    if (curPage < numOfPages) {
      setCurPage(prevPage => prevPage + 1); // Increase current page by 1
    }
  };

  useEffect(() => {
    $(".skw-page").removeClass("active"); // Remove 'active' class from all pages
    $(`.skw-page-${curPage}`).addClass("active"); // Add 'active' class to the current page
  }, [curPage]);

  useEffect(() => {
    // Detect if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.which === 38) { // Key up arrow
        navigateUp(); // Call navigateUp function
      } else if (e.which === 40) { // Key down arrow
        navigateDown(); // Call navigateDown function
      }
    };

    $(document).on("keydown", handleKeyDown);

    return () => {
      $(document).off("keydown", handleKeyDown);
    };
  }, [curPage]);

  return (
    <div className="container__education-header">
      <div className="skw-pages">
        {/* Remaining code for pages */}
        {/* Page 1 */}
        <div className={`skw-page skw-page-1 ${curPage === 1 ? 'active' : ''}`}>
          <div class="skw-page skw-page-1 active">
            <div class="skw-page__half skw-page__half--left">
              <div class="skw-page__skewed">
                <div class="skw-page__content">
                  <motion.div 
                    className="university-badge"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                  >
                    <div className="university-logo">JUST</div>
                    <div className="university-name">Est. 1986</div>
                  </motion.div>
                </div>
              </div>
            </div>
            <div class="skw-page__half skw-page__half--right">
              <div class="skw-page__skewed">
                <div class="skw-page__content" style={{ flexDirection: 'column' }}>
                  <motion.h1 
                    class="skw-page__heading"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    Jordan University of Science and Technology
                  </motion.h1>
                  
                  <motion.h2
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    Major: Computer Engineering
                  </motion.h2>

                  <motion.div 
                    className='education_buttons'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <motion.button 
                      className='button-download'
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Diploma
                    </motion.button>
                    <motion.button 
                      className='button-download'
                      whileHover={{ scale: 1.05, rotate: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Evaluated Transcript
                    </motion.button>
                  </motion.div>
                
                  <motion.a 
                    href="https://www.just.edu.jo/Pages/Default.aspx"
                    class="skw-page__description"
                    style={{ color: "#3399CC", textDecoration: "underline" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    whileHover={{ scale: 1.05, color: "#00fffb" }}
                  >
                    More about University
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 2 */}
        <div className={`skw-page skw-page-2 ${curPage === 2 ? 'active' : ''}`}>
          <div class="skw-page skw-page-2">
            <div class="skw-page__half skw-page__half--left">
              <div class="skw-page__skewed">
                <div class="skw-page__content skills-content">
                  <motion.h1 
                    class="skills-main-heading"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    Professional Skills
                  </motion.h1>
                  
                  <div class="skills-grid">
                    {[
                      { title: '💻 Programming', skills: ['JavaScript', 'C#', 'Python', 'Java', 'C++'] },
                      { title: '🔧 Frameworks', skills: ['React', '.NET', 'Node.js', 'Express'] },
                      { title: '🗄️ Database', skills: ['SQL', 'MongoDB', 'MySQL'] },
                      { title: '🎨 Front-End', skills: ['HTML5', 'CSS3', 'Responsive Design'] }
                    ].map((category, idx) => (
                      <motion.div 
                        class="skill-category" 
                        key={idx}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <h3 class="skill-category-title">{category.title}</h3>
                        <div class="skill-tags">
                          {category.skills.map((skill, skillIdx) => (
                            <motion.span 
                              class="skill-tag" 
                              key={skillIdx}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: (idx * 0.1) + (skillIdx * 0.05) }}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div class="skw-page__half skw-page__half--right">
              <div class="skw-page__skewed">
                <div class="skw-page__content skills-content">
                  <motion.h1 
                    class="skills-main-heading"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    Soft Skills
                  </motion.h1>
                  
                  <div class="soft-skills-list">
                    {[
                      { icon: '🤝', title: 'Communication', desc: 'Strong verbal & written skills' },
                      { icon: '👥', title: 'Team Collaboration', desc: 'Agile/Scrum methodologies' },
                      { icon: '🎯', title: 'Problem Solving', desc: 'Analytical & critical thinking' },
                      { icon: '⏱️', title: 'Time Management', desc: 'Meeting deadlines efficiently' }
                    ].map((skill, idx) => (
                      <motion.div 
                        class="soft-skill-item" 
                        key={idx}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                        whileHover={{ x: 10, scale: 1.05 }}
                      >
                        <motion.span 
                          class="soft-skill-icon"
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {skill.icon}
                        </motion.span>
                        <div class="soft-skill-text">
                          <h4>{skill.title}</h4>
                          <p>{skill.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 3 */}
        <div className={`skw-page skw-page-3 ${curPage === 3 ? 'active' : ''}`}>
          <div class="skw-page skw-page-3">
            <div class="skw-page__half skw-page__half--left">
              <div class="skw-page__skewed">
                <div class="skw-page__content projects-content">
                  <motion.h1 
                    class="projects-main-heading"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    Projects & Research
                  </motion.h1>
                  
                  <div class="projects-list">
                    {[
                      { icon: '🌐', title: 'Web Development', desc: 'Multiple responsive websites & web applications', tags: ['React', 'Full-Stack', 'Responsive'], highlight: false },
                      { icon: '🔬', title: 'AI & Image Processing', desc: 'Eye-tracking software for disabled users - Computer cursor control system', tags: ['AI', 'Machine Learning', 'Computer Vision'], highlight: true },
                      { icon: '📜', title: 'Patent Research & Eligibility', desc: 'Patent researching and eligibility internship - Intellectual property analysis', tags: ['Patent Research', 'IP Analysis', 'Internship'], highlight: false }
                    ].map((project, idx) => (
                      <motion.div 
                        class={`project-card ${project.highlight ? 'highlight' : ''}`}
                        key={idx}
                        initial={{ opacity: 0, y: 50, rotateX: -15 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        whileHover={{ y: -8, scale: 1.02, boxShadow: "0 15px 40px rgba(138, 43, 226, 0.5)" }}
                      >
                        <motion.div 
                          class="project-icon"
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          {project.icon}
                        </motion.div>
                        <div class="project-details">
                          <h3 class="project-title">{project.title}</h3>
                          <p class="project-description">{project.desc}</p>
                          <div class="project-tags">
                            {project.tags.map((tag, tagIdx) => (
                              <motion.span 
                                class="project-tag" 
                                key={tagIdx}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: (idx * 0.2) + (tagIdx * 0.1) }}
                                whileHover={{ scale: 1.15, y: -3 }}
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div class="skw-page__half skw-page__half--right">
              <div class="skw-page__skewed">
                <div class="skw-page__content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div 
        className="keyboard-hint"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <span>{isMobile ? 'Tap side buttons to navigate' : 'Use ↑ ↓ arrow keys to navigate'}</span>
      </motion.div>

      <div className="navigation-favicons">
        <motion.button 
          className="favicon-btn prev-favicon" 
          onClick={navigateUp}
          whileHover={{ scale: 1.15, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          disabled={curPage === 1}
        >
          <IoIosArrowBack />
        </motion.button>
        
        <motion.div 
          className="page-favicon"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="page-number">{curPage}</span>
        </motion.div>

        <motion.button 
          className="favicon-btn next-favicon" 
          onClick={navigateDown}
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          disabled={curPage === numOfPages}
        >
          <IoIosArrowForward />
        </motion.button>
      </div>
    </div>
  );
};

export default Head;
