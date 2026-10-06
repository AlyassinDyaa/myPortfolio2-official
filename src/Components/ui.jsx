import React from 'react'
import { motion } from 'framer-motion'

// Fades and lifts content in once as it scrolls into view
export const Reveal = ({ children, delay = 0, y = 24, className, as = 'div' }) => {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Tag>
  )
}

// Eyebrow + title + optional lead, shared by every section
export const SectionHead = ({ eyebrow, title, lead, center = false, as = 'h2' }) => {
  const Title = as
  return (
    <Reveal className={`ui-section-head${center ? ' is-center' : ''}`}>
      {eyebrow && <span className="ui-eyebrow">{eyebrow}</span>}
      <Title className={as === 'h1' ? 'ui-h1' : 'ui-h2'}>{title}</Title>
      {lead && <p className="ui-lead">{lead}</p>}
    </Reveal>
  )
}

// Shared resume file so every download button serves the same PDF
export const RESUME = require("../Assets/D'YaaAlyassinSoftwareRESUME.pdf")
export const RESUME_NAME = 'Dyaa_Alyassin_Software_Engineer_Resume.pdf'
