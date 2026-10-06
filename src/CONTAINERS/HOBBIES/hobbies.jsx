import React from 'react'
import { FaSwimmer, FaRunning, FaBook, FaGamepad, FaFutbol } from 'react-icons/fa'
import { GiKimono } from 'react-icons/gi'
import { FiFeather, FiTrendingUp, FiSun } from 'react-icons/fi'
import { Reveal, SectionHead } from '../../Components/ui'
import "./hobbies.css"

import image2 from "../../Assets/hobbiesList/highRes/tkd.jpg"
import image3 from "../../Assets/hobbiesList/highRes/running.jpg"
import image4 from "../../Assets/hobbiesList/highRes/dcomics.jpg"
import image5 from "../../Assets/hobbiesList/highRes/gaming.jpg"
import image6 from "../../Assets/hobbiesList/swimming2.jpg"
import image7 from "../../Assets/hobbiesList/soccer.jpg"

const hobbies = [
  { title: "Swimming", Icon: FaSwimmer, image: image6, description: "Diving into the water, finding peace and strength with every stroke." },
  { title: "Taekwondo", Icon: GiKimono, image: image2, description: "Mastering discipline, focus, and the art of self-defense." },
  { title: "Running", Icon: FaRunning, image: image3, description: "Pushing limits, clearing the mind, one mile at a time." },
  { title: "Comics", Icon: FaBook, image: image4, description: "Creating worlds and characters through art and storytelling." },
  { title: "Gaming", Icon: FaGamepad, image: image5, description: "Exploring virtual worlds and solving complex challenges." },
  { title: "Soccer", Icon: FaFutbol, image: image7, description: "Teamwork, strategy, and the thrill of the game." },
];

const values = [
  { Icon: FiSun, title: "Balance", text: "Maintaining a healthy work-life balance through diverse activities." },
  { Icon: FiTrendingUp, title: "Growth", text: "Constantly learning and improving in different areas of life." },
  { Icon: FiFeather, title: "Creativity", text: "Expressing ideas and emotions through various mediums." },
];

const Hobbies = () => {
  return (
    <main className="ui-page">
      <header className="ui-page-hero">
        <div className="ui-container">
          <SectionHead
            as="h1"
            eyebrow="Hobbies"
            title="Life outside the code"
            lead="Beyond technology, I believe in a balanced life filled with activities that challenge both body and mind. Here's what keeps me inspired."
          />
          <Reveal delay={0.1}>
            <blockquote className="hobby-quote">
              "Life is like a pencil, it may have a sharp point or may be broken, but it's up to us to keep writing our own story."
            </blockquote>
          </Reveal>
        </div>
      </header>

      <section className="ui-section hobby-grid-section">
        <div className="ui-container">
          <div className="hobby-grid">
            {hobbies.map(({ title, Icon, image, description }, i) => (
              <Reveal key={title} delay={(i % 3) * 0.06}>
                <article className="hobby-card">
                  <img src={image} alt={title} loading="lazy" />
                  <div className="hobby-card__body">
                    <span className="ui-icon hobby-card__icon"><Icon /></span>
                    <h3 className="ui-h3">{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="ui-section">
        <div className="ui-container">
          <SectionHead eyebrow="Why it matters" title="Why hobbies matter" center />
          <div className="hobby-values">
            {values.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.06} className="ui-card hobby-value">
                <span className="ui-icon"><Icon /></span>
                <h3 className="ui-h3">{title}</h3>
                <p className="ui-muted">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hobbies
