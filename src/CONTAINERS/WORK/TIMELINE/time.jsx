import React from 'react'
import "./time.css"
import { motion } from "framer-motion";
import { FaLaptopCode, FaCode } from "react-icons/fa";

const jobs = [
  {
    title: "Software Engineer / IT Specialist 2",
    company: "New York State - Department of Human Rights",
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
    <div className='container__timeline'>
      <header className='headONE'>
        <motion.h1
          className='header_head'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          EXPERIENCE
        </motion.h1>
      </header>

      <section className="timeline">
        <motion.div
          className="timeline__line"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        />

        {jobs.map(({ title, company, location, date, link, Icon, points, projects, tech }, i) => {
          const fromLeft = i % 2 === 0;
          // The row watches the viewport; icon and card animate through variants
          // (an icon starting at scale 0 has no size, so it can't be observed itself)
          return (
            <motion.div
              key={title}
              className={`timeline__item ${fromLeft ? "is-left" : "is-right"}`}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.div
                className="timeline__icon"
                variants={{
                  hidden: { scale: 0, rotate: -90 },
                  show: { scale: 1, rotate: 0, transition: { type: "spring", stiffness: 220, damping: 16, delay: 0.1 } },
                }}
              >
                <Icon />
              </motion.div>

              <motion.div
                className="timeline__card"
                variants={{
                  hidden: { opacity: 0, x: fromLeft ? -60 : 60 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.2 } },
                }}
              >
                <span className="timeline__date">{date}</span>
                <h2>{title}</h2>
                <a className="timeline__company" href={link} target="_blank" rel="noreferrer">{company}</a>
                {location && <span className="timeline__location">{location}</span>}

                <ul className="timeline__points">
                  {points.map((p) => <li key={p}>{p}</li>)}
                </ul>

                {projects && (
                  <div className="timeline__projects">
                    <h4>Key projects</h4>
                    {projects.map(({ name, text }) => (
                      <p key={name}><strong>{name}</strong> - {text}</p>
                    ))}
                  </div>
                )}

                <div className="timeline__tech">
                  {tech.map((t) => <span key={t}>{t}</span>)}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </section>
    </div>
  )
}

export default Time
