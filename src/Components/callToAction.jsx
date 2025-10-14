import React from 'react'
import { Link } from 'react-router-dom'

const callToAction = () => {
  const resume = require("../Assets/D'YaaAlyassinSoftwareRESUME.pdf");
  
  return (
    <div className='cta'>
      <a href = {resume} download className='btn-head'> Download Resume. </a>
      <Link to="/Contact" className='btn-head btn-primary'> Let's Talk. </Link>
    </div>
  )
}

export default callToAction
