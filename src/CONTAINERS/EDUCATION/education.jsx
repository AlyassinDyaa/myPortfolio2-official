import React from 'react';
import { motion } from 'framer-motion';
import './education.css';
import JUST_IMG from '../../Assets/just.jpg';
import DIPLOMA from '../../Assets/edu/diploma.pdf';
import TRANSCRIPT from '../../Assets/edu/transcriptEval.pdf';

const Education = () => {
  return (
    <div className="education-page">
      {/* Hero Section with University Image */}
      <section className="education-hero">
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="university-logo-badge"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          >
            <h1 className="university-logo-text">JUST</h1>
            <p className="university-est">Est. 1986</p>
          </motion.div>
          
          <motion.div 
            className="hero-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="university-name">Jordan University of Science and Technology</h2>
            <p className="major-name">Bachelor of Computer Engineering</p>
            
            <div className="education-buttons">
              <motion.a 
                href={DIPLOMA}
                download="D'Yaa_Alyassin_Diploma.pdf"
                className="edu-btn primary"
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                📄 View Diploma
              </motion.a>
              <motion.a 
                href={TRANSCRIPT}
                download="D'Yaa_Alyassin_Transcript.pdf"
                className="edu-btn secondary"
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📊 Transcript
              </motion.a>
              <motion.a 
                href="https://www.just.edu.jo/Pages/Default.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="edu-btn tertiary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🌐 University Website
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="education-section skills-section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional Skills
        </motion.h2>
        
        <div className="skills-container">
          <div className="skills-column">
            <h3 className="column-title">💻 Technical Skills</h3>
            {[
              { title: 'Programming', skills: ['JavaScript', 'C#', 'Python', 'Java', 'C++'] },
              { title: 'Frameworks', skills: ['React', '.NET', 'Node.js', 'Express'] },
              { title: 'Database', skills: ['SQL', 'MongoDB', 'MySQL'] },
              { title: 'Front-End', skills: ['HTML5', 'CSS3', 'Responsive Design'] }
            ].map((category, idx) => (
              <motion.div 
                className="skill-group" 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h4 className="skill-group-title">{category.title}</h4>
                <div className="skill-tags-wrapper">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span 
                      className="skill-badge" 
                      key={skillIdx}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (idx * 0.1) + (skillIdx * 0.05) }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="skills-column">
            <h3 className="column-title">🌟 Soft Skills</h3>
            {[
              { icon: '🤝', title: 'Communication', desc: 'Strong verbal & written communication' },
              { icon: '👥', title: 'Team Collaboration', desc: 'Agile/Scrum methodologies' },
              { icon: '🎯', title: 'Problem Solving', desc: 'Analytical & critical thinking' },
              { icon: '⏱️', title: 'Time Management', desc: 'Efficient deadline management' }
            ].map((skill, idx) => (
              <motion.div 
                className="soft-skill-card" 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ x: 10, scale: 1.03 }}
              >
                <motion.span 
                  className="soft-skill-emoji"
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {skill.icon}
                </motion.span>
                <div className="soft-skill-info">
                  <h4>{skill.title}</h4>
                  <p>{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="education-section projects-section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects & Research
        </motion.h2>
        
        <div className="projects-grid">
          {[
            { icon: '🌐', title: 'Web Development', desc: 'Multiple responsive websites & web applications', tags: ['React', 'Full-Stack', 'Responsive'], featured: false },
            { icon: '🔬', title: 'AI & Image Processing', desc: 'Eye-tracking software for disabled users - Computer cursor control system', tags: ['AI', 'Machine Learning', 'Computer Vision'], featured: true },
            { icon: '📜', title: 'Patent Research & Eligibility', desc: 'Patent researching and eligibility internship - Intellectual property analysis', tags: ['Patent Research', 'IP Analysis', 'Internship'], featured: false }
          ].map((project, idx) => (
            <motion.div 
              className={`project-box ${project.featured ? 'featured' : ''}`}
              key={idx}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              {project.featured && <div className="featured-badge">⭐ Featured</div>}
              <motion.div 
                className="project-emoji"
                whileHover={{ scale: 1.3, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {project.icon}
              </motion.div>
              <h3 className="project-name">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tech-tags">
                {project.tags.map((tag, tagIdx) => (
                  <motion.span 
                    className="tech-tag" 
                    key={tagIdx}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (idx * 0.2) + (tagIdx * 0.1) }}
                    whileHover={{ scale: 1.15, y: -3 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;

