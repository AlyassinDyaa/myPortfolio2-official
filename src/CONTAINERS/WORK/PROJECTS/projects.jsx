import React, { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import "./projects.css"

import { FiExternalLink, FiGithub, FiLock, FiClock, FiUsers, FiMaximize2, FiX } from 'react-icons/fi';
import { Reveal, SectionHead } from '../../../Components/ui';

import IMG1 from "../../../Assets/portfolio1.png";
import IMG2 from "../../../Assets/portfolio2.png";
import IMG3 from "../../../Assets/rest.png";
import IMG4 from "../../../Assets/meta.png";
import IMG5 from "../../../Assets/netclone.png";
import IMG6 from "../../../Assets/fitness1.png";
import IMG7 from "../../../Assets/unovaFit.png";
import IMG8 from "../../../Assets/portfolio3.png";
import IMG9 from "../../../Assets/3dportfolio1.png";
import IMG10 from "../../../Assets/yd.png"
import IMG11 from "../../../Assets/nextus.png"
import TUBEGRAB from "../../../Assets/tubegrab.jpg"
import DASHBOARD from "../../../Assets/idyaa-dashboard.jpg"
import MEDIAPLAYER from "../../../Assets/mediaplayer.jpg"
import IMAGINACTION from "../../../Assets/imaginaction.jpg"
import DARKBEATS from "../../../Assets/darkbeats.jpg"
import MILTON from "../../../Assets/miltonaguiar.jpg"
import CATARINA from "../../../Assets/catarina.jpg"
import QURBA from "../../../Assets/qurba.jpg"
import ICCD from "../../../Assets/iccd.jpg"
import FIRSTGEAR from "../../../Assets/firstgear.jpg"

const CATARINA_URL = "https://catarinaportfolio.vercel.app/";

const IMAGINACTION_URL = "https://imaginaction-comics.vercel.app/";
const DARKBEATS_URL = "https://jbeatsart.vercel.app/";

// Shown in this order. private: screenshot only, no public demo or source.
// hidden: kept here but not shown. demo "#" means the link is not ready yet.
// team: built with a team. demoLabel: text for the demo button (default "Live demo").
const projects = [
  {
    title: "TubeGrab",
    category: "personal",
    hidden: true,
    private: true,
    image: TUBEGRAB,
    description: "Windows desktop app for downloading YouTube videos and playlists, with parallel downloads, a live queue and per-playlist combining into one video with chapters.",
    tech: ["Python", "CustomTkinter", "yt-dlp", "FFmpeg"],
  },
  {
    title: "IDyaa Dashboard",
    category: "personal",
    private: true,
    image: DASHBOARD,
    description: "Personal productivity workspace with a Word-style document editor, financial tracker, tasks, fitness and habits, plus Claude AI built in. Installable as a PWA.",
    tech: ["React", "TypeScript", "Vite", "Node.js"],
  },
  {
    title: "Home Media Player",
    category: "personal",
    private: true,
    image: MEDIAPLAYER,
    description: "Streaming platform with account login that turns messy movie and TV folders into a Netflix-style library with artwork, and plays almost any format.",
    tech: ["Electron", "React", "Node.js", "SQLite"],
  },
  {
    title: "Qurba",
    category: "team",
    team: true,
    image: QURBA,
    description: "iOS app that finds Muslim-owned businesses, halal restaurants and masjids local to you. Built as part of a team.",
    tech: ["iOS"],
    demo: "https://apps.apple.com/us/app/qurba-find-muslim-businesses/id6755057911",
    demoLabel: "App Store",
  },
  {
    title: "ICCD",
    category: "client",
    image: ICCD,
    description: "Website for the Islamic Center of the Capital District: prayer times with a live countdown, services, learning and community events.",
    tech: ["React", "TypeScript", "Vite"],
    demo: "https://iccdny.vercel.app/",
  },
  {
    title: "First Gear Automotive",
    category: "client",
    image: FIRSTGEAR,
    description: "Dealership site for a San Antonio pre-owned car lot: filterable inventory, favourites and compare, test-drive, financing and trade-in requests, in English and Spanish.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "#",
  },
  {
    title: "JBeatsArt",
    category: "client",
    image: DARKBEATS,
    description: "Portfolio site for illustrator Jordan Beattie, with a filterable gallery, commissions page and a content admin panel.",
    tech: ["React", "Vite", "Framer Motion"],
    demo: DARKBEATS_URL,
  },
  {
    title: "Milton Aguiar",
    category: "client",
    image: MILTON,
    description: "Portfolio site for comic book artist Milton Aguiar, creator of Raptor.",
    tech: ["React", "Vite", "Framer Motion"],
    demo: "https://miltonaguiar.com/",
  },
  {
    title: "Catarina Silva",
    category: "client",
    image: CATARINA,
    description: "Portfolio and shop links for artist, illustrator and animator Catarina Silva, with a content admin panel.",
    tech: ["React", "Vite", "Framer Motion"],
    demo: CATARINA_URL,
  },
  {
    title: "ImaginAction Comics",
    category: "client",
    image: IMAGINACTION,
    description: "Website for independent comics publisher ImaginAction: catalogue, series pages, creators, gallery and news, edited through an admin panel.",
    tech: ["React", "Vite", "Framer Motion"],
    demo: IMAGINACTION_URL,
  },
  {
    title: "Nextus Customs",
    category: "client",
    image: IMG11,
    description: "Online store website.",
    demo: "https://nextuscustoms.com",
  },
  {
    title: "Portfolio 1",
    category: "early",
    image: IMG1,
    description: "Personal portfolio site.",
    tech: ["React"],
    demo: "https://alyassinprotfolio1.netlify.app",
    github: "https://github.com/AlyassinDyaa/portfolio1",
  },
  {
    title: "Portfolio 2",
    category: "early",
    image: IMG2,
    description: "Personal portfolio site.",
    tech: ["React"],
    demo: "https://alyassinportfolio2.netlify.app",
    github: "https://github.com/AlyassinDyaa/portfolio2",
  },
  {
    title: "Portfolio 3",
    category: "early",
    image: IMG8,
    description: "Personal portfolio site.",
    demo: "https://dyaaportfolio1.netlify.app/",
  },
  {
    title: "Restaurant",
    category: "early",
    image: IMG3,
    description: "Restaurant landing page.",
    tech: ["React"],
    demo: "https://alyassinrest.netlify.app",
    github: "https://github.com/AlyassinDyaa/restauarntGh",
  },
  {
    title: "Your Design",
    category: "early",
    image: IMG10,
    description: "Design studio website.",
    tech: ["React"],
    demo: "https://yourdesign.vercel.app/",
    github: "https://github.com/AlyassinDyaa/yourDesign/tree/main/yd",
  },
  {
    title: "NetClone",
    category: "early",
    image: IMG5,
    description: "Netflix-style streaming interface.",
    tech: ["Angular"],
    demo: "https://alyassinnetflix.netlify.app",
  },
  {
    title: "UNOVA Fit",
    category: "early",
    image: IMG7,
    description: "Fitness app published on Google Play.",
    demo: "https://play.google.com/store/apps/details?id=com.unova_fit",
  },
];

const comingSoon = [
  { title: "Fitness", image: IMG6 },
  { title: "3D Portfolio", image: IMG9 },
  { title: "MetaWorld", image: IMG4 },
];

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'client', label: 'Client work' },
  { key: 'personal', label: 'Personal' },
  { key: 'team', label: 'Team' },
  { key: 'early', label: 'Early work' },
];

const ProjectLinks = ({ demo, demoLabel = 'Live demo', github, private: isPrivate }) => {
  const demoReady = demo && demo !== '#';
  const stop = (e) => e.stopPropagation();
  return (
    <div className="project__actions">
      {isPrivate && <span className="project__note"><FiLock /> Private project, source and demo not public</span>}
      {demoReady && (
        <a className="ui-btn ui-btn--ghost ui-btn--sm" href={demo} target="_blank" rel="noreferrer" onClick={stop}>
          <FiExternalLink /> {demoLabel}
        </a>
      )}
      {demo === '#' && <span className="project__note"><FiClock /> Link coming soon</span>}
      {github && (
        <a className="ui-btn ui-btn--ghost ui-btn--sm" href={github} target="_blank" rel="noreferrer" onClick={stop}>
          <FiGithub /> Code
        </a>
      )}
    </div>
  );
};

const Badges = ({ team, private: isPrivate }) => (
  <>
    {isPrivate && <span className="ui-badge project__badge"><FiLock /> Private</span>}
    {team && <span className="ui-badge project__badge"><FiUsers /> Team project</span>}
  </>
);

const ProjectCard = ({ project, onOpen }) => {
  const { title, image, description, tech } = project;
  return (
    <article
      className="ui-card ui-card--hover project is-clickable"
      onClick={() => onOpen(project)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(project) } }}
      tabIndex={0}
      role="button"
      aria-label={`${title}: view details`}
    >
      <div className="project__media">
        <img src={image} alt={`${title} screenshot`} loading="lazy" />
        <Badges {...project} />
        <span className="project__peek"><FiMaximize2 /> View details</span>
      </div>

      <div className="project__body">
        <h3 className="ui-h3">{title}</h3>
        {description && <p className="project__desc">{description}</p>}
        {tech && (
          <div className="ui-tags">
            {tech.map((t) => <span key={t} className="ui-tag">{t}</span>)}
          </div>
        )}
        <ProjectLinks {...project} />
      </div>
    </article>
  );
};

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') onClose() };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div className="ui-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
          <motion.div
            className="ui-modal project-modal"
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button className="ui-modal__close" onClick={onClose} aria-label="Close"><FiX /></button>
            <div className="project-modal__media">
              <img src={project.image} alt={`${project.title} screenshot`} />
              <Badges {...project} />
            </div>
            <div className="project-modal__body">
              <span className="ui-eyebrow">{(FILTERS.find((f) => f.key === project.category) || {}).label}</span>
              <h3 className="ui-h2">{project.title}</h3>
              {project.description && <p className="ui-lead">{project.description}</p>}
              {project.tech && (
                <div className="ui-tags">
                  {project.tech.map((t) => <span key={t} className="ui-tag">{t}</span>)}
                </div>
              )}
              <ProjectLinks {...project} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function Projects() {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);

  const visible = projects.filter((p) => !p.hidden);
  const shown = filter === 'all' ? visible : visible.filter((p) => p.category === filter);
  const count = (key) => (key === 'all' ? visible.length : visible.filter((p) => p.category === key).length);

  return (
    <>
      <section className="ui-section" id="projects">
        <div className="ui-container">
          <SectionHead
            eyebrow="Projects"
            title="Things I've built"
            lead="Personal products, sites built for clients and creators, a team app on the App Store, and earlier front-end work. Click any project for details."
          />

          <div className="ui-tabs" role="tablist" aria-label="Filter projects">
            {FILTERS.filter((f) => count(f.key) > 0).map((f) => (
              <button
                key={f.key}
                role="tab"
                aria-selected={filter === f.key}
                className={`ui-tab${filter === f.key ? ' is-active' : ''}`}
                onClick={() => setFilter(f.key)}
              >
                {filter === f.key && <motion.span layoutId="project-tab" className="ui-tab__pill" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
                <span>{f.label}<small>{count(f.key)}</small></span>
              </button>
            ))}
          </div>

          <motion.div layout className="projects-grid">
            <AnimatePresence mode="popLayout">
              {shown.map((p) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard project={p} onOpen={setSelected} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="ui-section">
        <div className="ui-container">
          <SectionHead eyebrow="In progress" title="Coming soon" />
          <div className="projects-grid projects-grid--soon">
            {comingSoon.map(({ title, image }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <article className="ui-card project project--soon">
                  <div className="project__media">
                    <img src={image} alt={`${title} preview`} loading="lazy" />
                    <span className="ui-badge project__badge"><FiClock /> Soon</span>
                  </div>
                  <div className="project__body">
                    <h3 className="ui-h3">{title}</h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selected} onClose={closeModal} />
    </>
  );
}

export default Projects;
