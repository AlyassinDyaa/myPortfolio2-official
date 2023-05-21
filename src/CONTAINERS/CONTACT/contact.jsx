import React, { useRef } from 'react';
import "./contact.css";
import {BsFacebook} from "react-icons/bs" 
import {AiFillInstagram} from "react-icons/ai"
import {GiOverInfinity} from "react-icons/gi"
import {SiFreelancer} from "react-icons/si"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"



const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const subject = subjectRef.current.value;
    const message = messageRef.current.value;

    const mailtoLink = `mailto:dyaaalyassin@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\n${message}`)}`;
    window.location.href = mailtoLink;

    // Clear the input fields
    nameRef.current.value = '';
    emailRef.current.value = '';
    subjectRef.current.value = '';
    messageRef.current.value = '';
  };

  return (
   <div className='container__contact'>
   <section className="get-in-touch">
     <h1 className="title">Get in touch</h1>
 
     <div className='contact-content'>
       <div className='contact-form'>
         <form className="contact-form" onSubmit={handleSubmit}>
           <div className="form-field">
             <label className="label" htmlFor="name">Name</label>
             <input ref={nameRef} id="name" className="input-text js-input" type="text" required placeholder="Enter your name" />
           </div>
           <div className="form-field">
             <label className="label" htmlFor="email">E-mail</label>
             <input ref={emailRef} id="email" className="input-text js-input" type="email" required placeholder="Enter your e-mail" />
           </div>
           <div className="form-field">
             <label className="label" htmlFor="subject">Subject</label>
             <input ref={subjectRef} id="subject" className="input-text js-input" type="text" required placeholder="Enter the subject" />
           </div>
           <div className="form-field">
             <label className="label" htmlFor="message">Message</label>
             <input ref={messageRef} id="message" className="input-text js-input" type="text" required placeholder="Enter your message" />
           </div>
           <div className="form-field align-center">
             <button className="btn-head" type="submit" value="Submit">SUBMIT</button>
           </div>
         </form>
       </div>
 
       <div className='contact-details'>
         <h1>Email: dyaaalyassin@yahoo.com</h1>
         <h1>Phone: +1 518 952 5899</h1>
         <h1>Address: Niskayuna 12309, NY</h1>
 
         <div className='socialmedia'>
            <BsFacebook style={{ fontSize: '30px' }} />
            <AiFillInstagram style={{ fontSize: '30px' }} />
            <GiOverInfinity style={{ fontSize: '30px' }} />
            <SiFreelancer style={{ fontSize: '30px' }} />
            <BsLinkedin style={{ fontSize: '30px' }} />
            <BsGithub style={{ fontSize: '30px' }} />
         </div>


       </div>
     </div>
   </section>
 </div>
 
  );
}

export default Contact;
