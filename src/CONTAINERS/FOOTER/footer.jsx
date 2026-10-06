import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs"
import { AiFillInstagram } from "react-icons/ai"
import { GiOverInfinity } from "react-icons/gi"

const socials = [
  { href: "https://www.linkedin.com/in/d-yaa-a-1b56b9144/", label: "LinkedIn", Icon: BsLinkedin },
  { href: "https://github.com/AlyassinDyaa", label: "GitHub", Icon: BsGithub },
  { href: "https://www.facebook.com/dyaa.alyassin/", label: "Facebook", Icon: BsFacebook },
  { href: "https://www.instagram.com/dyaa_alyassin/", label: "Instagram", Icon: AiFillInstagram },
  { href: "https://www.instagram.com/idyaaart/", label: "IDyaa Art on Instagram", Icon: GiOverInfinity },
];

const pages = [
  { to: "/", label: "Home" },
  { to: "/Work", label: "Work" },
  { to: "/Education", label: "Education" },
  { to: "/Hobbies", label: "Hobbies" },
  { to: "/Contact", label: "Contact" },
];

const footer = () => {
  return (
    <footer className="site-footer">
      <div className="ui-container site-footer__top">
        <div className="site-footer__brand">
          <span className="nav__logo">DA</span>
          <div>
            <strong>D'Yaa Alyassin</strong>
            <p>Software Engineer · Full-Stack .NET Developer</p>
          </div>
        </div>

        <nav className="site-footer__links" aria-label="Footer">
          {pages.map(({ to, label }) => <Link key={to} to={to}>{label}</Link>)}
        </nav>

        <div className="site-footer__social">
          {socials.map(({ href, label, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className="ui-container site-footer__bottom">
        <span>&copy; {new Date().getFullYear()} D'Yaa Alyassin. All rights reserved.</span>
        <span>Albany, NY</span>
      </div>
    </footer>
  )
}

export default footer
