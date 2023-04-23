import React, { useState } from 'react'
import "./sections.css"
import WORK from "../../../Assets/workPic.jpg"
import JUST from "../../../Assets/just.jpg"
import COMICS from "../../../Assets/comics.jpg"
import { Navigate } from "react-router-dom";

const scrollToTop = () => window.scrollTo(0, 0);

const Sections = () => {

  const [goToWork, setGoToWork] = React.useState(false);
    const [goToEDU, setGoToEDU] = React.useState(false);
    const [goToSkills, setGoToSkills] = React.useState(false);
    const [goToHobbies, setGoToHobbies] = React.useState(false);

    if (goToWork) {
      return <Navigate to="/Work" />;
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


  
  return (
    <div className='container__sections'>

        <section className="cards-wrapper">
            <div className="card-grid-space">
              <div className="card" style={{ "--bg-img": `url(${WORK})` }}>
                <div>
                  <h1>WORK</h1>
                  <p>Here are some of my recent projects and experiences in the technology industry.</p>
                  <div className="date"></div>
                     <button class="btn-head" onClick={() => {setGoToWork(true);  scrollToTop();} }> Lets Go</button>
                </div>
              </div>
            </div>



            <div className="card-grid-space">
              <div className="card"  style={{ "--bg-img": `url(${JUST})` }}>
                <div>
                  <h1>EDUCATION</h1>
                  <p>Discover my academic background and qualifications.</p>
                  <div className="date"></div>
                   <button class="btn-head" onClick={() => {setGoToEDU(true);  scrollToTop();}}>Lets Go</button>
                </div>
              </div>
            </div>



            <div className="card-grid-space">
              <div className="card"  style={{ "--bg-img": "url(https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)" }}>
                <div>
                  <h1>SKILLS</h1>
                  <p>Unveil my skill set in the skills section of my portfolio website.</p>
                  <div className="date"></div>
                    <button class="btn-head" onClick={() => {setGoToSkills(true);  scrollToTop();}}>Lets Go</button>
                </div>
              </div>
            </div>

            <div className="card-grid-space">
              <div className="card" style={{ "--bg-img": `url(${COMICS})` }}>
                <div>
                  <h1>HOBBIES</h1>
                  <p>Peek into my interests and hobbies.</p>
                  <div className="date"></div>
                    <button class="btn-head" onClick={() => {setGoToHobbies(true);  scrollToTop();}}>Lets Go</button>
                </div>
              </div>
            </div>
    </section>
</div>
  )
}

export default Sections
