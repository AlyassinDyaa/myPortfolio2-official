import React from 'react'
import "./testimonials.css"

import FLOATNav from "../../Components/FloatNav/Nav"

import DS from "./DELICATE-SOLUTIONS/ds"
import TEST from "./TEST/test"
import SERVICES from "./SERVICES/services"

const testimonials = () => {
  return (
    <div id='TEST'>

      <FLOATNav/>
      <DS/>
      <SERVICES/>
      <TEST/>
    </div>
  )
}

export default testimonials
