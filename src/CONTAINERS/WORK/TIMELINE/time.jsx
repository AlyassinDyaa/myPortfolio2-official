import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './time.css'
import { FaLaptopCode, FaCode } from 'react-icons/fa';
import { FiMapPin, FiExternalLink, FiChevronDown } from 'react-icons/fi';
import { Reveal, SectionHead } from '../../../Components/ui';

const jobs = [
  {
    title: "Software Engineer / IT Specialist 2",
    company: "New York State - Division of Human Rights",
    location: "Albany, NY",
    date: "Jun 2023 - Present",
    link: "https://dhr.ny.gov/",
    Icon: FaLaptopCode,
    points: [
      "Build and support enterprise web applications with C#, ASP.NET Core, Entity Framework, SQL Server, JavaScript and REST APIs, owning features end to end from requirements to production",
      "Deliver components across all six SDLC stages, partnering with business analysts and stakeholders to turn complex requirements into production-ready software",
      "Build REST APIs, integrations and database components that streamline workflows and reduce manual processing",
      "Provide production support and performance tuning, using root-cause analysis and SQL/data-access optimization to keep high-use workflows fast and reliable",
      "Contribute to architecture decisions, peer code reviews, implementation planning and technical documentation",
    ],
    projects: [
      { name: "Online Complaint Web App", text: "optimized performance and delivered end-to-end localization across 13 languages" },
      { name: "Case Management System", text: "building a new enterprise case management system for DHR (in development)" },
    ],
    tech: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server", "REST APIs", "JavaScript"],
  },
  {
    title: "Front-End Lead Developer",
    company: "Stack Technologies",
    date: "Aug 2020 - Jun 2022",
    link: "https://www.facebook.com/StackTechnology.jo",
    Icon: FaCode,
    points: [
      "Led front-end engineering across React.js, Angular and Vue.js to deliver scalable, responsive web applications",
      "Created reusable UI components and shared architecture patterns that cut duplicate work and sped up feature delivery",
      "Established front-end coding standards, led troubleshooting of complex issues, and mentored developers on debugging and component design",
    ],
    tech: ["React.js", "Angular", "Vue.js", "JavaScript"],
  },
];

const Job = ({ job, index, open, onToggle }) => {
  const { title, company, location, date, link, Icon, points, projects, tech } = job
  const panelId = `xp-panel-${index}`
  return (
    <Reveal as="li" className={`xp__item${open ? ' is-open' : ''}`} delay={index * 0.08}>
      <span className="xp__marker"><Icon /></span>

      <article className="ui-card xp__card">
        <header className="xp__head">
          <div>
            <h3 className="ui-h3">{title}</h3>
            <a className="xp__company" href={link} target="_blank" rel="noreferrer">
              {company} <FiExternalLink />
            </a>
          </div>
          <div className="xp__meta">
            <span className="ui-badge">{date}</span>
            {location && <span className="xp__location"><FiMapPin /> {location}</span>}
          </div>
        </header>

        <div className="ui-tags">
          {tech.map((t) => <span key={t} className="ui-tag">{t}</span>)}
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              key="details"
              className="xp__details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="xp__points">
                {points.map((p) => <li key={p}>{p}</li>)}
              </ul>

              {projects && (
                <div className="xp__projects">
                  <h4>Key projects</h4>
                  {projects.map(({ name, text }) => (
                    <p key={name}><strong>{name}</strong>: {text}</p>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <button className="xp__toggle" onClick={onToggle} aria-expanded={open} aria-controls={panelId}>
          {open ? 'Hide details' : 'Show details'}
          <FiChevronDown className="xp__chev" />
        </button>
      </article>
    </Reveal>
  )
}

const Time = () => {
  // the current role starts open; the rest expand on click
  const [openSet, setOpenSet] = useState(() => new Set([0]))
  const toggle = (i) => setOpenSet((prev) => {
    const next = new Set(prev)
    if (next.has(i)) next.delete(i)
    else next.add(i)
    return next
  })

  return (
    <section className="ui-section" id="experience">
      <div className="ui-container">
        <SectionHead eyebrow="Experience" title="Where I've worked" />

        <ol className="xp">
          {jobs.map((job, i) => (
            <Job key={job.title} job={job} index={i} open={openSet.has(i)} onToggle={() => toggle(i)} />
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Time
