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
    const [goToHobbies, setGoToHobbies] = React.useState(false);
    const [goToContact, setGoToContact] = React.useState(false);

    if (goToWork) {
      return <Navigate to="/Work" />;
    }
    if (goToEDU) {
      return <Navigate to="/Education" />;
    }
    if (goToHobbies) {
      return <Navigate to="/Hobbies" />;
    }
    if (goToContact) {
      return <Navigate to="/Contact" />;
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
              <h2 class="title">HOBBIES</h2>
              <p class="copy">Peek into my interests and hobbies outside of work and technology.</p>
              <button class="btn-head" onClick={() => {setGoToHobbies(true);  scrollToTop();}}>Lets Go</button>
            </div>
          </div>


          <div class="card">
            <div class="content">
              <h2 class="title">CONTACT</h2>
              <p class="copy">Get in touch with me for opportunities, collaborations, or just to say hello.</p>
              <button class="btn-head" onClick={() => {setGoToContact(true);  scrollToTop();}}>Lets Go</button>
            </div>
          </div>
    
      </main>
    </div>
  )
}

export default Sections