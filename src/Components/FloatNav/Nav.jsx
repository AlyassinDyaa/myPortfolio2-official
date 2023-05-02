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
      <a href='#DS' onClick={() => setActiveNav('#')} className= { activeNav === '#DS'? 'active' : ""} > <AiOutlineHome/> </a>
      <a href='#services' onClick={() => setActiveNav('#about')} className= { activeNav === '#services'? 'active' : ""}> <AiOutlineUser/> </a>
      <a href='#feedback' onClick={() => setActiveNav('#work')} className= { activeNav === '#feedback'? 'active' : ""}> <BiBook/> </a>
    </navigation>
  )
}

export default Nav
