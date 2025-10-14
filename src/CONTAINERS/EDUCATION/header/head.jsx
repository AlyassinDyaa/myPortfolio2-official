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
                <div class="skw-page__content"></div>
              </div>
            </div>
            <div class="skw-page__half skw-page__half--right">
              <div class="skw-page__skewed">
                <div class="skw-page__content" style={{ flexDirection: 'column' }}>
                  <h1 class="skw-page__heading">Jordan University of Science and Technology</h1>
                  <h2>Major: Computer Engineering</h2>

                  <div className='education_buttons'>
                    <button className='button-download'>Diploma</button>
                    <button className='button-download'>Evaluated Transcript</button>
                  </div>
                
                  <a href="https://www.just.edu.jo/Pages/Default.aspx"
                   class="skw-page__description"
                   style={{ color: "#3399CC", textDecoration: "underline" }}>More about University</a>
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
                  <h1 class="skills-main-heading">Professional Skills</h1>
                  
                  <div class="skills-grid">
                    <div class="skill-category">
                      <h3 class="skill-category-title">💻 Programming</h3>
                      <div class="skill-tags">
                        <span class="skill-tag">JavaScript</span>
                        <span class="skill-tag">C#</span>
                        <span class="skill-tag">Python</span>
                        <span class="skill-tag">Java</span>
                        <span class="skill-tag">C++</span>
                      </div>
                    </div>

                    <div class="skill-category">
                      <h3 class="skill-category-title">🔧 Frameworks</h3>
                      <div class="skill-tags">
                        <span class="skill-tag">React</span>
                        <span class="skill-tag">.NET</span>
                        <span class="skill-tag">Node.js</span>
                        <span class="skill-tag">Express</span>
                      </div>
                    </div>

                    <div class="skill-category">
                      <h3 class="skill-category-title">🗄️ Database</h3>
                      <div class="skill-tags">
                        <span class="skill-tag">SQL</span>
                        <span class="skill-tag">MongoDB</span>
                        <span class="skill-tag">MySQL</span>
                      </div>
                    </div>

                    <div class="skill-category">
                      <h3 class="skill-category-title">🎨 Front-End</h3>
                      <div class="skill-tags">
                        <span class="skill-tag">HTML5</span>
                        <span class="skill-tag">CSS3</span>
                        <span class="skill-tag">Responsive Design</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="skw-page__half skw-page__half--right">
              <div class="skw-page__skewed">
                <div class="skw-page__content skills-content">
                  <h1 class="skills-main-heading">Soft Skills</h1>
                  
                  <div class="soft-skills-list">
                    <div class="soft-skill-item">
                      <span class="soft-skill-icon">🤝</span>
                      <div class="soft-skill-text">
                        <h4>Communication</h4>
                        <p>Strong verbal & written skills</p>
                      </div>
                    </div>

                    <div class="soft-skill-item">
                      <span class="soft-skill-icon">👥</span>
                      <div class="soft-skill-text">
                        <h4>Team Collaboration</h4>
                        <p>Agile/Scrum methodologies</p>
                      </div>
                    </div>

                    <div class="soft-skill-item">
                      <span class="soft-skill-icon">🎯</span>
                      <div class="soft-skill-text">
                        <h4>Problem Solving</h4>
                        <p>Analytical & critical thinking</p>
                      </div>
                    </div>

                    <div class="soft-skill-item">
                      <span class="soft-skill-icon">⏱️</span>
                      <div class="soft-skill-text">
                        <h4>Time Management</h4>
                        <p>Meeting deadlines efficiently</p>
                      </div>
                    </div>
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
                <div class="skw-page__content"></div>
              </div>
            </div>
            <div class="skw-page__half skw-page__half--right">
              <div class="skw-page__skewed">
                <div class="skw-page__content projects-content">
                  <h1 class="projects-main-heading">Projects & Research</h1>
                  
                  <div class="projects-list">
                    <div class="project-card">
                      <div class="project-icon">🌐</div>
                      <div class="project-details">
                        <h3 class="project-title">Web Development</h3>
                        <p class="project-description">Multiple responsive websites & web applications</p>
                        <div class="project-tags">
                          <span class="project-tag">React</span>
                          <span class="project-tag">Full-Stack</span>
                          <span class="project-tag">Responsive</span>
                        </div>
                      </div>
                    </div>

                    <div class="project-card highlight">
                      <div class="project-icon">🔬</div>
                      <div class="project-details">
                        <h3 class="project-title">AI & Image Processing</h3>
                        <p class="project-description">Eye-tracking software for disabled users - Computer cursor control system</p>
                        <div class="project-tags">
                          <span class="project-tag">AI</span>
                          <span class="project-tag">Machine Learning</span>
                          <span class="project-tag">Computer Vision</span>
                        </div>
                      </div>
                    </div>

                    <div class="project-card">
                      <div class="project-icon">📜</div>
                      <div class="project-details">
                        <h3 class="project-title">Patent Research & Eligibility</h3>
                        <p class="project-description">Patent researching and eligibility internship - Intellectual property analysis</p>
                        <div class="project-tags">
                          <span class="project-tag">Patent Research</span>
                          <span class="project-tag">IP Analysis</span>
                          <span class="project-tag">Internship</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

      <div className="navigation-buttons">
        <motion.button 
          className="btn-head btn-previous" 
          onClick={navigateUp}
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(138, 43, 226, 0.8)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          disabled={curPage === 1}
        >
          <span className="btn-text">← Previous</span>
          <IoIosArrowBack className="btn-icon" />
        </motion.button>
        
        <motion.div 
          className="page-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="current-page">{curPage}</span>
          <span className="page-separator">/</span>
          <span className="total-pages">{numOfPages}</span>
        </motion.div>

        <motion.button 
          className="btn-head btn-next" 
          onClick={navigateDown}
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(138, 43, 226, 0.8)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          disabled={curPage === numOfPages}
        >
          <span className="btn-text">Next →</span>
          <IoIosArrowForward className="btn-icon" />
        </motion.button>
      </div>
    </div>
  );
};

export default Head;
