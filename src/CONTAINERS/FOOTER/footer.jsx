import React from 'react'
import "./footer.css"
import {BsFacebook} from "react-icons/bs" 
import {AiFillInstagram} from "react-icons/ai"
import {GiOverInfinity} from "react-icons/gi"
import {SiFreelancer} from "react-icons/si"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"


const footer = () => {
  return (
    <div>
    

<footer class="footer-distributed">

  <div class="footer-right">

    <a href="#"><BsFacebook/></a>
    <a href="#"><AiFillInstagram/></a>
    <a href="#"><GiOverInfinity/></a>
    <a href="#"><SiFreelancer/></a>
    <a href="#"><BsLinkedin/></a>
    <a href="#"><BsGithub/></a>

  </div>

  <div class="footer-left">

    <p class="footer-links">
      <a class="link-1" href="#"> Home</a>

      <a href="#"> Work</a>

      <a href="#"> Education</a>

      <a href="#"> Skills</a>

      <a href="#"> Services</a>

      <a href="#"> Hobbies</a>
    </p>

    <p>Delicate Solutions &copy; 2023</p>
  </div>

</footer>
    </div>
  )
}

export default footer
