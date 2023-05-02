import React from 'react'
import "./contact.css"

const contact = () => {

  
  return (
     <div className='container__contact'>

        <section class="get-in-touch">
         <h1 class="title">Get in touch</h1>

         <div className='contact-form'>
               <div className='contact-section'>
                     <form class="contact-form row">
                     <div class="form-field col x-50">
                     <label class="label" for="name">Name</label>
                        <input id="name" class="input-text js-input" type="text" required/>
                     </div>
                     <div class="form-field col x-50">
                     <label class="label" for="email">E-mail</label>
                        <input id="email" class="input-text js-input" type="email" required/>
                     </div>
                     <div class="form-field col x-50">
                     <label class="label" for="name">Subject</label>
                        <input id="name" class="input-text js-input" type="text" required/>
                     </div>
                     <div class="form-field col x-100">
                     <label class="label" for="message">Message</label>
                        <input id="message" class="input-text js-input" type="text" required/>
                     </div>
                     <div class="form-field col x-100 align-center">
                        <button class="btn-head" type="submit" value="Submit">SUBMIT</button>
                     </div>
                  </form>
               </div>

               <div className='contact-details'>
                  <h1>hi</h1>
               </div>
      </div>

      </section>

  
      
   </div>
  )
}

export default contact
