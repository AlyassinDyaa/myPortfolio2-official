import React from 'react'
import "./main.css"

import HERO  from "./HERO/hero"
import ABOUT  from "./ABOUT/about"
import SECTIONS  from "./SECTION/sections"



const main = () => {
  return (
    <div className='container__main' id='main'>
        <HERO/>
        <ABOUT/>
        <SECTIONS/>
    </div>
  )
}

export default main
