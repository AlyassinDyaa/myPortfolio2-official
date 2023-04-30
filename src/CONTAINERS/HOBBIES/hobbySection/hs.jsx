import React, { useState, useEffect} from 'react';
import gsap from 'gsap';
import './hs.css';

import image1 from "../../../Assets/hobbiesList/swimming.jpg"
import image2 from "../../../Assets/hobbiesList/tkd.jpg"
import image3 from "../../../Assets/hobbiesList/running.jpg"
import image4 from "../../../Assets/hobbiesList/dcomics.jpg"
import image5 from "../../../Assets/hobbiesList/writing.jpg"

const Hs = () => {

  const items = document.querySelectorAll('.item')

  const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return
    it.clicked = false
  })
  gsap.to(items, {
    width: item.clicked ? '15vw' : '8vw',
    duration: 2,
    ease: 'elastic(1, .6)'
  })
  
  item.clicked = !item.clicked
  gsap.to(item, {
    width: item.clicked ? '42vw' : '15vw',
    duration: 2.5,
    ease: 'elastic(1, .3)'
  })
}

items.forEach((item, i) => {
  item.clicked = false
  item.addEventListener('click', () => expand(item, i))
})


  return (
    <div className="group">
      <h1>TITLE</h1>
      <div>
        <div className="item" style={{ backgroundImage: `url(${image1})` }}></div>
        <div className="item" style={{ backgroundImage: `url(${image2})` }}></div>
        <div className="item" style={{ backgroundImage: `url(${image3})` }}></div>
        <div className="item" style={{ backgroundImage: `url(${image4})`}}></div>
        <div className="item" style={{ backgroundImage: `url(${image5})` }}></div>
      </div>
  </div>
  )
}

export default Hs
