import React from 'react'
import "./time.css"
import { motion } from "framer-motion";
import { FaLaptopCode, FaCode } from "react-icons/fa";

const jobs = [
  {
    title: "Software Developer",
    company: "New York State",
    date: "06/2023 - Present",
    link: "https://dhr.ny.gov/",
    Icon: FaLaptopCode,
    points: [
      "Build and maintain ASP.NET / C# applications that follow program specifications and coding standards",
      "Write design specifications for new systems, integrations and enhancements",
      "Troubleshoot and update application components backed by SQL Server and Oracle databases",
      "Turn business requirements into automated applications that match agency priorities",
      "Represent the Development/QA team in weekly meetings and explain technical issues to functional and technical staff",
    ],
    tech: ["ASP.NET", "C#", "SQL Server", "Oracle", "HTML"],
  },
  {
    title: "Front-End Developer Intern",
    company: "Stack Technologies",
    date: "08/2020",
    link: "https://www.facebook.com/StackTechnology.jo",
    Icon: FaCode,
    points: [
      "Built reusable components with React, Angular and Vue.js",
      "Developed interactive HTML/CSS/JavaScript components, improving page speed by 50%",
      "Improved navigation and visual design across several pages, raising customer engagement by 20%",
      "Kept stylesheets maintainable and scalable with SASS and LESS",
      "Worked with the team in agile sprints",
    ],
    tech: ["React", "Angular", "Vue.js", "JavaScript", "SASS"],
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

        {jobs.map(({ title, company, date, link, Icon, points, tech }, i) => {
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

                <ul className="timeline__points">
                  {points.map((p) => <li key={p}>{p}</li>)}
                </ul>

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
