import React from 'react'
import './time.css'
import { FaLaptopCode, FaCode } from 'react-icons/fa';
import { FiMapPin, FiExternalLink } from 'react-icons/fi';
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

const Time = () => {
  return (
    <section className="ui-section" id="experience">
      <div className="ui-container">
        <SectionHead eyebrow="Experience" title="Where I've worked" />

        <ol className="xp">
          {jobs.map(({ title, company, location, date, link, Icon, points, projects, tech }, i) => (
            <Reveal as="li" key={title} className="xp__item" delay={i * 0.08}>
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

                <div className="ui-tags">
                  {tech.map((t) => <span key={t} className="ui-tag">{t}</span>)}
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Time
