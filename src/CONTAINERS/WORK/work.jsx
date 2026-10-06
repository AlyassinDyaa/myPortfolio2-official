import React from 'react'
import { HiDownload } from 'react-icons/hi'
import { Reveal, SectionHead, RESUME, RESUME_NAME } from '../../Components/ui'

import Time from "./TIMELINE/time"
import PROJECT from "./PROJECTS/projects"
import "./work.css"

const Work = () => {
  return (
    <main className="ui-page">
      <header className="ui-page-hero">
        <div className="ui-container work-hero">
          <SectionHead
            as="h1"
            eyebrow="Work"
            title="Experience & projects"
            lead="Five years of building enterprise web applications, plus the products and sites I've designed and shipped along the way."
          />
          <Reveal delay={0.1}>
            <a className="ui-btn ui-btn--primary" href={RESUME} download={RESUME_NAME}>
              <HiDownload /> Download CV
            </a>
          </Reveal>
        </div>
      </header>

      <Time />
      <PROJECT />
    </main>
  )
}

export default Work
