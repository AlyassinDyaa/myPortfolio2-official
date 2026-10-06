import React from 'react';
import { FiFileText, FiAward, FiGlobe, FiMessageCircle, FiUsers, FiTarget, FiClock, FiCode, FiCpu, FiBookOpen } from 'react-icons/fi';
import { Reveal, SectionHead } from '../../Components/ui';
import './education.css';
import DIPLOMA from '../../Assets/edu/diploma.pdf';
import TRANSCRIPT from '../../Assets/edu/transcriptEval.pdf';
import CAMPUS from '../../Assets/just.jpg';

const technical = [
  { title: 'Languages', skills: ['C#', 'JavaScript', 'SQL', 'Java', 'C++', 'Python'] },
  { title: 'Frameworks', skills: ['ASP.NET Core', 'Entity Framework', 'React.js', 'Angular', 'Vue.js', 'jQuery'] },
  { title: 'Databases', skills: ['SQL Server', 'Oracle', 'Relational Design', 'Query Optimization'] },
  { title: 'Development', skills: ['REST APIs', 'Git', 'Agile/Scrum', 'SDLC', 'Unit Testing', 'UAT'] },
  { title: 'Engineering', skills: ['App Integration', 'Production Support', 'Root-Cause Analysis', 'Code Review', 'Documentation'] },
];

const soft = [
  { Icon: FiMessageCircle, title: 'Communication', desc: 'Clear verbal and written communication with technical and business teams' },
  { Icon: FiUsers, title: 'Team collaboration', desc: 'Agile/Scrum delivery, code reviews and mentoring' },
  { Icon: FiTarget, title: 'Problem solving', desc: 'Analytical, root-cause-first thinking' },
  { Icon: FiClock, title: 'Time management', desc: 'Reliable delivery against deadlines' },
];

const research = [
  { Icon: FiCode, title: 'Web Development', desc: 'Multiple responsive websites and web applications.', tags: ['React', 'Full-Stack', 'Responsive'] },
  { Icon: FiCpu, title: 'AI & Image Processing', desc: 'Eye-tracking software that lets users with disabilities control the computer cursor.', tags: ['AI', 'Machine Learning', 'Computer Vision'], featured: true },
  { Icon: FiBookOpen, title: 'Patent Research & Eligibility', desc: 'Patent research and eligibility internship focused on intellectual property analysis.', tags: ['Patent Research', 'IP Analysis', 'Internship'] },
];

const Education = () => {
  return (
    <main className="ui-page">
      <header className="ui-page-hero">
        <div className="ui-container">
          <SectionHead
            as="h1"
            eyebrow="Education"
            title="Education & skills"
            lead="A computer engineering degree, and the technical and people skills I use every day."
          />
        </div>
      </header>

      {/* Degree */}
      <section className="ui-section edu-degree-section">
        <div className="ui-container">
          <Reveal className="ui-card edu-degree">
            <div className="edu-degree__media">
              <img src={CAMPUS} alt="Jordan University of Science and Technology campus" loading="lazy" />
              <span className="edu-degree__logo">JUST<small>Est. 1986</small></span>
            </div>
            <div className="edu-degree__body">
              <span className="ui-badge">Sep 2017 - Jun 2022</span>
              <h2 className="ui-h2 edu-degree__title">Bachelor of Science in Computer Engineering</h2>
              <p className="ui-lead">Jordan University of Science and Technology · Jordan</p>
              <div className="edu-degree__actions">
                <a className="ui-btn ui-btn--primary" href={DIPLOMA} download="D'Yaa_Alyassin_Diploma.pdf">
                  <FiAward /> Diploma
                </a>
                <a className="ui-btn ui-btn--ghost" href={TRANSCRIPT} download="D'Yaa_Alyassin_Transcript.pdf">
                  <FiFileText /> Transcript
                </a>
                <a className="ui-btn ui-btn--ghost" href="https://www.just.edu.jo/Pages/Default.aspx" target="_blank" rel="noopener noreferrer">
                  <FiGlobe /> University site
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="ui-section">
        <div className="ui-container">
          <SectionHead eyebrow="Skills" title="What I work with" />
          <div className="edu-skills">
            <div className="edu-skills__tech">
              {technical.map(({ title, skills }, i) => (
                <Reveal key={title} delay={i * 0.05} className="ui-card edu-skill-group">
                  <h3 className="edu-skill-group__title">{title}</h3>
                  <div className="ui-tags">
                    {skills.map((s) => <span key={s} className="ui-tag">{s}</span>)}
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="edu-skills__soft">
              {soft.map(({ Icon, title, desc }, i) => (
                <Reveal key={title} delay={i * 0.05} className="ui-card edu-soft">
                  <span className="ui-icon"><Icon /></span>
                  <div>
                    <h3 className="ui-h3">{title}</h3>
                    <p className="ui-muted">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects & research */}
      <section className="ui-section">
        <div className="ui-container">
          <SectionHead eyebrow="University" title="Projects & research" />
          <div className="edu-research">
            {research.map(({ Icon, title, desc, tags, featured }, i) => (
              <Reveal key={title} delay={i * 0.06} className={`ui-card ui-card--hover edu-research__card${featured ? ' is-featured' : ''}`}>
                <div className="edu-research__top">
                  <span className="ui-icon"><Icon /></span>
                  {featured && <span className="ui-badge">Featured</span>}
                </div>
                <h3 className="ui-h3">{title}</h3>
                <p className="ui-muted">{desc}</p>
                <div className="ui-tags">
                  {tags.map((t) => <span key={t} className="ui-tag">{t}</span>)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Education;
