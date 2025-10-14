import React, { useEffect } from 'react'
import "./time.css"
import { motion } from "framer-motion";

const scrollToTop = () => window.scrollTo(0, 0);

const Time = () => {
  useEffect(() => {
    const timelineBlocks = document.querySelectorAll('.cd-timeline-block');
    const offset = 0.8;

    function hideBlocks(blocks) {
      blocks.forEach(block => {
        block.querySelector('.cd-timeline-img').classList.add('is-hidden');
        block.querySelector('.cd-timeline-content').classList.add('is-hidden');
      });
    }

    function showBlocks(blocks) {
      blocks.forEach(block => {
        if (block.getBoundingClientRect().top <= window.innerHeight * offset && 
            block.querySelector('.cd-timeline-img').classList.contains('is-hidden')) {
          block.querySelector('.cd-timeline-img').classList.remove('is-hidden');
          block.querySelector('.cd-timeline-img').classList.add('bounce-in');
          block.querySelector('.cd-timeline-content').classList.remove('is-hidden');
          block.querySelector('.cd-timeline-content').classList.add('bounce-in');
        }
      });
    }

    hideBlocks(timelineBlocks);
    showBlocks(timelineBlocks);

    window.addEventListener('scroll', () => {
      showBlocks(timelineBlocks);
    });

    return () => {
      window.removeEventListener('scroll', () => {
        showBlocks(timelineBlocks);
      });
    };
  }, []);

  return (
    <div className='container__timeline'>
		
      <header className='headONE'>
	  <motion.h1 
        className='header_head'
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        EXPERIENCE
      </motion.h1>
		</header>
		

		

	<section id="cd-timeline" class="cd-container cssanimations">

	<div class="cd-timeline-block">
		<div class="cd-timeline-img cd-picture">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt="Picture"/>
		</div> 

		<div class="cd-timeline-content">
			<h2 style={{fontSize: 25}}>Software Developer</h2>
			<h3>New York State</h3>
                <p>
				• Code, test and maintain ASP.Net/C# applications that are in compliance with program specifications and coding standards<br/>
				• Utilize the following technologies in order to perform assigned duties: ASP.NET, C#, HTML, SQL Server, Oracle<br/>
				• Create detailed program design specifications for system implementations, Integrations, and enhancements<br/>
				• Utilize relevant programming languages, queries, utilities, maintenance tools, and relational databases (e.g. SQL Server, Oracle) to troubleshoot, update, and modify the various components<br/>
				• Communicate technical issues and information effectively, both verbally and in writing, with functional and technical staff<br/>
				• Identify business requirements to develop automated applications which meet business priorities<br/>
				• Participate in weekly meetings on behalf of the Development/QA team
				</p>
			<a href="https://dhr.ny.gov/" class="btn-head">MORE</a>
			<span class="cd-date">06/2023 - Present</span>
		</div> 
	</div>

	<div class="cd-timeline-block">
		<div class="cd-timeline-img cd-movie">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt="Picture"/>
		</div>

		<div class="cd-timeline-content">
			<h2 style={{fontSize: 25}}>Front-End Developer Intern</h2>
                <h3>Stack Technologies</h3>
			<p>
			• Utilized JavaScript libraries and frameworks such as React, Angular, and Vue.js to build efficient and reusable components<br/>
			• Developed interactive components using HTML/CSS/JavaScript and increased page speed performance by 50% on all sites<br/>
			• Optimized user experience for several web pages with intuitive navigation & visual design enhancements, improving customer engagement by 20%<br/>
			• Utilized CSS preprocessors such as SASS and LESS to improve the maintainability and scalability of code<br/>
			• Collaborates with other team members in agile processes
			</p>
			<a href="https://www.facebook.com/StackTechnology.jo" class="btn-head">MORE</a>
			<span class="cd-date">08/2020</span>
		</div> 
	</div>
		
	

	
	</section> 
    </div>
  )
}

export default Time
