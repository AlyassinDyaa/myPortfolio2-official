import React from 'react'
import "./head.css"

import dyaa from "../../../Assets/dyaa.png"
import unison from "../../../Assets/infinites/Unison0.png"

const head = () => {
  return (
              <div className='container__hobbies-head'>
                <div className='container__hobbies-head_title'>
                        
                </div>


                <div id='hero'>
                      <div class='layer-bg layer' data-depth='0.10' data-type='parallax'></div>
                      <div class='layer-1 layer' data-depth='0.20' data-type='parallax'></div>
                      <div class='layer-2 layer' data-depth='0.50' data-type='parallax'></div>
                      <div class='layer-3 layer' data-depth='0.80' data-type='parallax'></div>
                      <div class='layer-4 layer' data-depth='0.95' data-type='parallax'></div>
                      <div class='layer-overlay layer' data-depth='0.85' data-type='parallax'></div>
                      <div class='layer-5 layer' data-depth='1.00' data-type='parallax'></div>
                </div>


                <div id='hero-mobile'></div>

                <div id='content'>
                    <div class='container'>
                      <section class='first-section'>
                        <div class='row'>
                          <div class='col-sm-6'>
                            <h1>"Life is like a pencil, it may have a sharp point or may be broken, but it's up to us to keep writing our own story."</h1>
                          </div>
                        </div>
                        <div class='row'>
                          <div class='col-sm-6'>
                            <p>Welcome to our hobby section! Here you will find a variety of articles, guides, and resources to help you pursue your interests and discover new hobbies. Whether you're a seasoned enthusiast or just starting out, we have something for everyone. From crafting and gardening to gaming and sports, our hobby section is your one-stop-shop for all things leisure. So, sit back, relax, and explore our collection of hobby-related content. Who knows, you might just find your next favorite pastime!</p>
                          </div>
                        </div>
                      </section>
                    </div>
                </div>
          </div>
 

  )
}

export default head
