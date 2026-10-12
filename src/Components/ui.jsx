import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useSpring, animate, AnimatePresence } from 'framer-motion'

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

// Thin bar at the top of the page that fills as you scroll
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })
  return <motion.div className="ui-progress" style={{ scaleX }} aria-hidden="true" />
}

// Counts up to a number the first time it scrolls into view ("5+", "13")
export const CountUp = ({ value }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const target = parseInt(value, 10)
  const suffix = String(value).replace(/^\d+/, '')
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView || Number.isNaN(target)) return
    const controls = animate(0, target, { duration: 1.4, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) })
    return () => controls.stop()
  }, [inView, target])

  return <span ref={ref}>{Number.isNaN(target) ? value : `${n}${suffix}`}</span>
}

// Cycles through a list of words with a slide transition
export const RotatingText = ({ words, interval = 2600, className }) => {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), interval)
    return () => clearInterval(t)
  }, [words.length, interval])

  return (
    <span className={`ui-rotate ${className || ''}`} aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[i]}
          initial={{ y: '60%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-60%', opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

// Lets every .ui-card follow the cursor with a soft spotlight (sets --mx / --my)
export const useCardSpotlight = () => {
  useEffect(() => {
    const onMove = (e) => {
      const card = e.target.closest && e.target.closest('.ui-card')
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - r.left}px`)
      card.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    document.addEventListener('pointermove', onMove, { passive: true })
    return () => document.removeEventListener('pointermove', onMove)
  }, [])
}

// Shared resume file so every download button serves the same PDF
export const RESUME = require("../Assets/D'YaaAlyassinSoftwareRESUME.pdf")
export const RESUME_NAME = 'Dyaa_Alyassin_Software_Engineer_Resume.pdf'
export const EMAIL = 'dyaaalyassin99@gmail.com'
