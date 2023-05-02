import React from 'react'
import "./comics.css"

import image from "../../../Assets/c.jpg"
import unisonBackground from "../../../Assets/infinites/unisonB.png"
import unison from "../../../Assets/infinites/Unison0.png"
import orephicBckgrounf from "../../../Assets/infinites/o2.png"
import orephic from "../../../Assets/infinites/o4.png"

const comics = () => {
  return (
    <div className='container__hobbies-comics'>
        <div className='container__hobbies-comics-contain'>

                <div className='container__hobbies-comics_header'>
                    <div className='container__hobbies-comics_header-text'>
                        <h1>TITLE</h1>
                        <h2>Sub Title</h2>
                        <p>HELLLOOOO WORLD</p>
                    </div>
                <img src={image}/>
            </div>


            <div className='container__hobbies-comics-infinites'>

                <h1>MEET THE INFINITE CHARACTERS</h1>
                <div className='container__hobbies-comics-infinites-cards'>
                    <div class="card-comics">
                            <div class="wrapper">
                            <img src={orephicBckgrounf} class="cover-image" />
                            </div>
                            <h1></h1>
                            <img src={""} class="character" />
                        </div>
                    
                        <div class="card-comics">
                            <div class="wrapper">
                            <img src={unisonBackground} class="cover-image" />
                            </div>
                            <h1 className='title'>UNISON</h1>
                            <img src={"unison"} class="character" />
                        </div>

                        <div class="card-comics">
                            <div class="wrapper">
                            <img src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg" class="cover-image" />
                            </div>
                            <img src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png" class="title" />
                            <img src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp" class="character" />
                        </div>
                </div>
            </div>
       
        </div>
    </div>
  )
}



export default comics
