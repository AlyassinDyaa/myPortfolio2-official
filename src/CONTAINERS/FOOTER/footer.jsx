import React from 'react'
import "./footer.css"
import {BsFacebook} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import {GiOverInfinity} from "react-icons/gi"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"

const links = [
  { href: "https://www.facebook.com/dyaa.alyassin/", label: "Facebook", Icon: BsFacebook },
  { href: "https://www.instagram.com/dyaa_alyassin/", label: "Instagram", Icon: AiFillInstagram },
  { href: "https://www.instagram.com/infinity_comicss/", label: "Infinity Comics", Icon: GiOverInfinity },
  { href: "https://www.linkedin.com/in/d-yaa-a-1b56b9144/", label: "LinkedIn", Icon: BsLinkedin },
  { href: "https://github.com/AlyassinDyaa", label: "GitHub", Icon: BsGithub },
];

const footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3 className="footer-title">D'Yaa Alyassin Portfolio</h3>
        <p>D'Yaa Alyassin &copy; {new Date().getFullYear()}</p>
      </div>

      <div className="footer-right">
        {links.map(({ href, label, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
            <Icon />
          </a>
        ))}
      </div>
    </footer>
  )
}

export default footer
