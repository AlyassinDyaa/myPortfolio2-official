import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiDownload, HiArrowRight } from 'react-icons/hi'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaCodeBranch, FaServer, FaUsers } from 'react-icons/fa'
import { Reveal, SectionHead, RESUME, RESUME_NAME } from '../../Components/ui'
import './home.css'

import ME from '../../Assets/dyaa.png'
import WORK_IMG from '../../Assets/workPic.jpg'
import EDU_IMG from '../../Assets/just.jpg'
import HOBBY_IMG from '../../Assets/hobbiesList/highRes/gaming.jpg'
import CONTACT_IMG from '../../Assets/services3.jpg'

const stats = [
  { value: '5+', label: 'Years experience' },
  { value: '13', label: 'Languages localized' },
  { value: '3', label: 'Front-end frameworks led' },
]

const stack = ['C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'REST APIs', 'JavaScript', 'React', 'Angular', 'Vue.js', 'Oracle', 'Git']

const highlights = [
  {
    Icon: FaCodeBranch,
    title: 'End-to-end ownership',
    text: 'Features taken from requirements and design through testing, deployment and support.',
  },
  {
    Icon: FaServer,
    title: 'Reliable in production',
    text: 'Root-cause analysis and SQL tuning that keep high-use workflows fast and dependable.',
  },
  {
    Icon: FaUsers,
    title: 'Team leadership',
    text: 'Led front-end engineering, set coding standards and mentored developers.',
  },
]

const explore = [
  { to: '/Work', title: 'Work', text: 'Experience and the projects I have built.', img: WORK_IMG },
  { to: '/Education', title: 'Education', text: 'Degree, skills and research.', img: EDU_IMG },
  { to: '/Hobbies', title: 'Hobbies', text: 'What keeps me inspired outside of code.', img: HOBBY_IMG },
  { to: '/Contact', title: 'Contact', text: 'Opportunities, collaborations or a hello.', img: CONTACT_IMG },
]

const Home = () => {
  return (
    <main className="ui-page home">
      {/* Hero */}
      <section className="home-hero">
        <div className="ui-container home-hero__grid">
          <motion.div
            className="home-hero__text"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="ui-eyebrow">Software Engineer · Albany, NY</span>
            <h1 className="ui-h1">
              Hi, I'm <span className="ui-gradient-text">D'Yaa Alyassin</span>
            </h1>
            <p className="home-hero__role">Full-Stack .NET Developer</p>
            <p className="ui-lead">
              5+ years building enterprise web applications with C#, ASP.NET Core, SQL Server and React,
              from first requirement to production.
            </p>

            <div className="home-hero__actions">
              <a className="ui-btn ui-btn--primary" href={RESUME} download={RESUME_NAME}>
                <HiDownload /> Download resume
              </a>
              <Link className="ui-btn ui-btn--ghost" to="/Contact">
                Get in touch <HiArrowRight />
              </Link>
              <div className="home-hero__social">
                <a href="https://www.linkedin.com/in/d-yaa-a-1b56b9144/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BsLinkedin /></a>
                <a href="https://github.com/AlyassinDyaa" target="_blank" rel="noreferrer" aria-label="GitHub"><BsGithub /></a>
              </div>
            </div>

            <dl className="home-stats">
              {stats.map(({ value, label }) => (
                <div key={label} className="home-stats__item">
                  <dt>{value}</dt>
                  <dd>{label}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            className="home-hero__photo"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="home-hero__frame">
              <img src={ME} alt="D'Yaa Alyassin" />
            </div>
            <div className="home-hero__chip">
              <span className="home-hero__dot" /> Currently at NYS Division of Human Rights
            </div>
          </motion.div>
        </div>

        <div className="ui-container">
          <div className="home-stack" aria-label="Core technologies">
            {stack.map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="ui-section" id="about">
        <div className="ui-container home-about">
          <div>
            <SectionHead
              eyebrow="About"
              title="Engineering software teams can rely on"
            />
            <Reveal delay={0.1}>
              <p className="home-about__text">
                I'm a Software Engineer with 5+ years of experience building enterprise web applications in
                C#, ASP.NET Core, SQL Server and JavaScript. I own features from requirements to production,
                build REST APIs and integrations that remove manual work, and keep high-use systems fast and
                reliable. I love turning complex requirements into clean, maintainable software.
              </p>
            </Reveal>
          </div>

          <div className="home-about__list">
            {highlights.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={0.08 * i} className="ui-card home-about__item">
                <span className="ui-icon"><Icon /></span>
                <div>
                  <h3 className="ui-h3">{title}</h3>
                  <p className="ui-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className="ui-section">
        <div className="ui-container">
          <SectionHead eyebrow="Explore" title="Take a look around" center />
          <div className="home-explore">
            {explore.map(({ to, title, text, img }, i) => (
              <Reveal key={to} delay={0.06 * i}>
                <Link to={to} className="home-explore__card">
                  <img src={img} alt="" loading="lazy" />
                  <div className="home-explore__body">
                    <h3 className="ui-h3">{title}</h3>
                    <p>{text}</p>
                    <span className="home-explore__go">Open <HiArrowRight /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
