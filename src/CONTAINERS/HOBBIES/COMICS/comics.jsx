import React from 'react'
import "./comics.css"

import image from "../../../Assets/c.jpg"

const comics = () => {
  return (
    <div className='container__hobbies-comics'>

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
                    <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" class="cover-image" />
                    </div>
                    <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" class="title" />
                    <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" class="character" />
                </div>
            
                <div class="card-comics">
                    <div class="wrapper">
                    <img src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg" class="cover-image" />
                    </div>
                    <img src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png" class="title" />
                    <img src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp" class="character" />
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
  )
}



export default comics
