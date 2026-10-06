import React from 'react'
import "./projects.css"

import { FiExternalLink, FiGithub, FiLock, FiClock } from 'react-icons/fi';
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

// TODO: replace with the live Catarina Silva URL once it's deployed
const CATARINA_URL = "#";

const IMAGINACTION_URL = "https://imaginaction-comics.vercel.app/";
const DARKBEATS_URL = "https://darkbeatss.vercel.app/";

// Shown in this order. private: screenshot only, no public demo or source.
// hidden: kept here but not shown. demo "#" means the link is not ready yet.
const projects = [
  {
    title: "TubeGrab",
    hidden: true,
    private: true,
    image: TUBEGRAB,
    description: "Windows desktop app for downloading YouTube videos and playlists, with parallel downloads, a live queue and per-playlist combining into one video with chapters.",
    tech: ["Python", "CustomTkinter", "yt-dlp", "FFmpeg"],
  },
  {
    title: "IDyaa Dashboard",
    private: true,
    image: DASHBOARD,
    description: "Personal productivity workspace with a Word-style document editor, financial tracker, tasks, fitness and habits, plus Claude AI built in. Installable as a PWA.",
    tech: ["React", "TypeScript", "Vite", "Node.js"],
  },
  {
    title: "Home Media Player",
    private: true,
    image: MEDIAPLAYER,
    description: "Streaming platform with account login that turns messy movie and TV folders into a Netflix-style library with artwork, and plays almost any format.",
    tech: ["Electron", "React", "Node.js", "SQLite"],
  },
  {
    title: "DarkBeats",
    image: DARKBEATS,
    description: "Portfolio site for illustrator Jordan Beattie, with a filterable gallery, commissions page and a content admin panel.",
    tech: ["React", "Vite", "Framer Motion"],
    demo: DARKBEATS_URL,
  },
  {
    title: "Milton Aguiar",
    image: MILTON,
    description: "Portfolio site for comic book artist Milton Aguiar, creator of Raptor.",
    tech: ["React", "Vite", "Framer Motion"],
    demo: "https://miltonaguiar.vercel.app/",
  },
  {
    title: "Catarina Silva",
    image: CATARINA,
    description: "Portfolio and shop links for artist, illustrator and animator Catarina Silva, with a content admin panel.",
    tech: ["React", "Vite", "Framer Motion"],
    demo: CATARINA_URL,
  },
  {
    title: "ImaginAction Comics",
    image: IMAGINACTION,
    description: "Website for independent comics publisher ImaginAction: catalogue, series pages, creators, gallery and news, edited through an admin panel.",
    tech: ["React", "Vite", "Framer Motion"],
    demo: IMAGINACTION_URL,
  },
  {
    title: "Nextus Customs",
    image: IMG11,
    description: "Online store website.",
    demo: "https://nextuscustoms.com",
  },
  {
    title: "Portfolio 1",
    image: IMG1,
    description: "Personal portfolio site.",
    tech: ["React"],
    demo: "https://alyassinprotfolio1.netlify.app",
    github: "https://github.com/AlyassinDyaa/portfolio1",
  },
  {
    title: "Portfolio 2",
    image: IMG2,
    description: "Personal portfolio site.",
    tech: ["React"],
    demo: "https://alyassinportfolio2.netlify.app",
    github: "https://github.com/AlyassinDyaa/portfolio2",
  },
  {
    title: "Portfolio 3",
    image: IMG8,
    description: "Personal portfolio site.",
    demo: "https://dyaaportfolio1.netlify.app/",
  },
  {
    title: "Restaurant",
    image: IMG3,
    description: "Restaurant landing page.",
    tech: ["React"],
    demo: "https://alyassinrest.netlify.app",
    github: "https://github.com/AlyassinDyaa/restauarntGh",
  },
  {
    title: "Your Design",
    image: IMG10,
    description: "Design studio website.",
    tech: ["React"],
    demo: "https://yourdesign.vercel.app/",
    github: "https://github.com/AlyassinDyaa/yourDesign/tree/main/yd",
  },
  {
    title: "NetClone",
    image: IMG5,
    description: "Netflix-style streaming interface.",
    tech: ["Angular"],
    demo: "https://alyassinnetflix.netlify.app",
  },
  {
    title: "UNOVA Fit",
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

const ProjectCard = ({ title, image, description, tech, demo, github, private: isPrivate }) => {
  const demoReady = demo && demo !== '#';
  return (
    <article className="ui-card ui-card--hover project">
      <div className="project__media">
        <img src={image} alt={`${title} screenshot`} loading="lazy" />
        {isPrivate && <span className="ui-badge project__badge"><FiLock /> Private</span>}
      </div>

      <div className="project__body">
        <h3 className="ui-h3">{title}</h3>
        {description && <p className="project__desc">{description}</p>}
        {tech && (
          <div className="ui-tags">
            {tech.map((t) => <span key={t} className="ui-tag">{t}</span>)}
          </div>
        )}

        <div className="project__actions">
          {isPrivate && <span className="project__note"><FiLock /> Private project, source and demo not public</span>}
          {demoReady && (
            <a className="ui-btn ui-btn--ghost ui-btn--sm" href={demo} target="_blank" rel="noreferrer">
              <FiExternalLink /> Live demo
            </a>
          )}
          {demo === '#' && <span className="project__note"><FiClock /> Link coming soon</span>}
          {github && (
            <a className="ui-btn ui-btn--ghost ui-btn--sm" href={github} target="_blank" rel="noreferrer">
              <FiGithub /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

function Projects() {
  return (
    <>
      <section className="ui-section" id="projects">
        <div className="ui-container">
          <SectionHead
            eyebrow="Projects"
            title="Things I've built"
            lead="Personal products, sites built for clients and creators, and earlier front-end work."
          />
          <div className="projects-grid">
            {projects.filter((p) => !p.hidden).map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.06}>
                <ProjectCard {...p} />
              </Reveal>
            ))}
          </div>
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
    </>
  );
}

export default Projects;
