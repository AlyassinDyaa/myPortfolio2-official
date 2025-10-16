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

    <a href="https://www.facebook.com/dyaa.alyassin/"><BsFacebook/></a>
    <a href="https://www.instagram.com/dyaa_alyassin/"><AiFillInstagram/></a>
    <a href="https://www.instagram.com/infinity_comicss/"><GiOverInfinity/></a>
    <a href="#"><SiFreelancer/></a>
    <a href="https://www.linkedin.com/in/d-yaa-a-1b56b9144/"><BsLinkedin/></a>
    <a href="https://github.com/AlyassinDyaa"><BsGithub/></a>

  </div>

  <div class="footer-left">

    <p class="footer-links">
      <h3>D'Yaa Alyassin Portfolio</h3>
    </p>

    <p style={{color: "white"}}>D'Yaa Alyassin &copy; 2025</p>
  </div>

</footer>
    </div>
  )
}

export default footer
