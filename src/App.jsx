import React from 'react'
import { BrowserRouter as Router, Routes, Route , Navigate} from "react-router-dom"

import NAVMENU from "./Components/NavMENU/Navbar"

import MAIN from "./CONTAINERS/HOME/main"
import WORK from "./CONTAINERS/WORK/work"
import EDUCATION from "./CONTAINERS/EDUCATION/edu"
import HOBBIES from "./CONTAINERS/HOBBIES/hobbies"
import TEST from "./CONTAINERS/TESTIMONIALS/testimonials"
import CONTACT from "./CONTAINERS/CONTACT/contact"
import FOOTER from "./CONTAINERS/FOOTER/footer"

const App = () => {
  return (
    <Router>
      <NAVMENU/>

      <Routes>
        <Route path="/" element={<MAIN />} />
        <Route path="/Work" element={<WORK />} />
        <Route path="/Education" element={<EDUCATION/>} />
        <Route path="/TEST" element={<TEST/>} />
        <Route path="/Hobbies" element={<HOBBIES/>} />
      </Routes>

      <CONTACT/>
      <FOOTER/>
  </Router>
  )
}

export default App
