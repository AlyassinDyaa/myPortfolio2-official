import React from 'react'
import { BrowserRouter as Router, Routes, Route , Navigate} from "react-router-dom"

import NAVMENU from "./Components/NavMENU/Navbar"
import ScrollToTop from "./Components/ScrollToTop"

import MAIN from "./CONTAINERS/HOME/main"
import Work from "./CONTAINERS/WORK/work"
import Education from "./CONTAINERS/EDUCATION/edu"
import Hobbies from "./CONTAINERS/HOBBIES/hobbies"
import TEST from "./CONTAINERS/TESTIMONIALS/testimonials"
import CONTACT from "./CONTAINERS/CONTACT/contact"
import FOOTER from "./CONTAINERS/FOOTER/footer"

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <NAVMENU/>

      <Routes>
        <Route path="/" element={<MAIN />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Education" element={<Education/>} />
        <Route path="/TEST" element={<TEST/>} />
        <Route path="/Hobbies" element={<Hobbies/>} />
        <Route path="/Contact" element={<CONTACT/>} />
      </Routes>

      <FOOTER/>
  </Router>
  )
}

export default App
