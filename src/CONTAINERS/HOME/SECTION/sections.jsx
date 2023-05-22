import React from 'react'
import "./sections.css"
import { Navigate } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';





const Sections = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  
    const [goToWork, setGoToWork] = React.useState(false);
    const [goToEDU, setGoToEDU] = React.useState(false);
    const [goToSkills, setGoToSkills] = React.useState(false);
    const [goToHobbies, setGoToHobbies] = React.useState(false);
    const [goToServices, setGoToservices] = React.useState(false);

    if (goToWork) {
      return <Navigate to="/work" />;
    }
    if (goToEDU) {
      return <Navigate to="/edu" />;
    }
    if (goToSkills) {
      return <Navigate to="/skills" />;
    }
    if (goToHobbies) {
      return <Navigate to="/hobbies" />;
    }
    if (goToServices) {
      return <Navigate to="/TEST" />;
    }


    
  return (
    <div className='container__section'>
      
        <h1 >Lets Explore</h1>
   
        <main class="page-content">

          <div class="card">
            <div class="content">
              <h2 class="title">WORK</h2>
              <p class="copy">Here are some of my recent projects and experiences in the technology industry.</p>
              <button class="btn-head" onClick={() => {setGoToWork(true);  scrollToTop();} }> Lets Go</button>
            </div>
          </div>


          <div class="card">
            <div class="content">
              <h2 class="title">EDUCATION</h2>
              <p class="copy">Discover my academic background and qualifications.</p>
              <button class="btn-head" onClick={() => {setGoToEDU(true);  scrollToTop();}}>Lets Go</button>
            </div>
          </div>


          <div class="card">
            <div class="content">
              <h2 class="title">SKILLS</h2>
              <p class="copy">Unveil my skillset in the skills section of my portfolio website.</p>
              <button class="btn-head" onClick={() => {setGoToSkills(true);  scrollToTop();}}>Lets Go</button>
            </div>
          </div>


          <div class="card">
            <div class="content">
              <h2 class="title">SERVICES</h2>
              <p class="copy">Comprehensive services encompassing website design, development, and implementation.</p>
              <button class="btn-head" onClick={() => {setGoToservices(true);  scrollToTop();}}>Lets Go</button>
            </div>
          </div>


          <div class="card">
            <div class="content">
              <h2 class="title">HOBBIES</h2>
              <p class="copy">Peek into my interests and hobbies in the hobbies section of my portfolio website..</p>
              <button class="btn-head" onClick={() => {setGoToHobbies(true);  scrollToTop();}}>Lets Go</button>
            </div>
          </div>
    
      </main>
    </div>
  )
}

export default Sections