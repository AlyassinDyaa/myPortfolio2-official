import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDetail} from 'react-icons/bi'

import {useState} from 'react'


const Nav = () => {

  const [activeNav, setActiveNav] = useState("#");

  return (
    <navigation>
      <a href='#' onClick={() => setActiveNav('#')} className= { activeNav === '#'? 'active' : ""} > <AiOutlineHome/> </a>
      <a href='#about' onClick={() => setActiveNav('#about')} className= { activeNav === '#about'? 'active' : ""}> <AiOutlineUser/> </a>
      <a href='#work' onClick={() => setActiveNav('#work')} className= { activeNav === '#work'? 'active' : ""}> <BiBook/> </a>
      <a href='#skills' onClick={() => setActiveNav('#skills')} className= { activeNav === '#skills'? 'active' : ""}> <RiServiceLine/> </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className= { activeNav === '#contact'? 'active' : ""}> <BiMessageSquareDetail/> </a>
    </navigation>
  )
}

export default Nav
