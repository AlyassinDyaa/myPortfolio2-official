import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import './hs.css';

import image1 from "../../../Assets/hobbiesList/swimming.jpg"
import image2 from "../../../Assets/hobbiesList/tkd.jpg"
import image3 from "../../../Assets/hobbiesList/running.jpg"
import image4 from "../../../Assets/hobbiesList/dcomics.jpg"
import image5 from "../../../Assets/hobbiesList/writing.jpg"

const Hs = () => {
  const [items, setItems] = useState([]);
  

  const expand = (item, i) => {
    items.forEach((it, ind) => {
      if (i === ind) return;
      it.clicked = false;
      it.classList.remove('expanded');
    });
    gsap.to(items, {
      width: item.clicked ? '15vw' : '8vw',
      duration: 2,
      ease: 'elastic(1, .6)'
    });
  
    item.clicked = !item.clicked;
    item.classList.toggle('expanded');
    gsap.to(item, {
      width: item.clicked ? '42vw' : '15vw',
      duration: 2.5,
      ease: 'elastic(1, .3)'
    });
  };

  useEffect(() => {
    const newItems = document.querySelectorAll('.item');
    setItems(newItems);
  }, []);

  useEffect(() => {
    items.forEach((item, i) => {
      item.clicked = false
      item.addEventListener('click', () => expand(item, i))
    });
  }, [items]);

  return (
    <div className="group">

            <h1>HOBBIES</h1>
            
            <div className="item" style={{ backgroundImage: `url(${image1})` }}>
              <h1 className="title">SWIMMING</h1>
              {/*<a href="https://www.newyorkoptical.com/" class="btn-head">MORE</a>*/}
            </div>
            <div className="item" style={{ backgroundImage: `url(${image2})` }}>
              <h1 className="title">TAE KWON DO</h1>
              {/*<a href="https://www.newyorkoptical.com/" class="btn-head">MORE</a>*/}
              </div>
            <div className="item" style={{ backgroundImage: `url(${image3})` }}>
              <h1 className="title">RUNNING</h1>
              {/*<a href="https://www.newyorkoptical.com/" class="btn-head">MORE</a>*/}
              </div>
            <div className="item" style={{ backgroundImage: `url(${image4})` }}>
              <h1 className="title">COMICS</h1>
              {/*<a href="https://www.newyorkoptical.com/" class="btn-head">MORE</a>*/}
              </div>
            <div className="item" style={{ backgroundImage: `url(${image5})` }}>
              <h1 className="title">READING</h1>
              {/*<a href="https://www.newyorkoptical.com/" class="btn-head">MORE</a>*/}
              </div>
    </div>
  );
}


export default Hs;
