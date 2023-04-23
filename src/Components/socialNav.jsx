import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'

const socialNav = () => {
  return (
    <div className='header__socials'>
        <a href = 'https://www.linkedin.com/in/d-yaa-a-1b56b9144/' target = "_blank"> <BsLinkedin/> </a>
        <a href = 'https://github.com/AlyassinDyaa' target = "_blank"> <BsGithub/> </a>
        <a href = 'https://www.facebook.com/dyaa.alyassin/' target = "_blank"> <BsFacebook/></a>
        <a href = 'https://dribbble.com/Alyassin' target = "_blank"> <BsDribbble/> </a>

    </div>
  )
}

export default socialNav