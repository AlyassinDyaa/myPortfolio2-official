import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiInfinite } from 'react-icons/bi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';


const scrollToTop = () => window.scrollTo(0, 0);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h2 style={{ color: 'wheat' }}>DA</h2>
      </div>
      <ul className="app__navbar-links">
      <li className="p__opensans">
          <Link to="/" onClick={() => {  scrollToTop();} }>Home</Link>
        </li>
        <li className="p__opensans">
          <Link to="/work" onClick={() => {  scrollToTop();} }>Work</Link>
        </li>
        <li className="p__opensans">
          <Link to="/education" onClick={() => {  scrollToTop();} }>Education</Link>
        </li>
        <li className="p__opensans">
          <Link to="/skills" onClick={() => {  scrollToTop();} }>Skills</Link>
        </li>
        <li className="p__opensans">
          <Link to="/TEST" onClick={() => {  scrollToTop();} }>Solutions</Link>
        </li>
        <li className="p__opensans">
          <Link to="/hobbies" onClick={() => {  scrollToTop();} }>Hobbies</Link>
        </li>
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="wheat"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <BiInfinite
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <Link to="/" onClick={() => {setToggleMenu(false); scrollToTop()}}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work" onClick={() => {setToggleMenu(false); scrollToTop()}}>
                  Work
                </Link>
              </li>
              <li>
                <Link to="/edu"onClick={() => {setToggleMenu(false); scrollToTop()}}>
                  Education
                </Link>
              </li>
              <li>
                <Link to="/skills" onClick={() => {setToggleMenu(false); scrollToTop()}}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/TEST" onClick={() => {setToggleMenu(false); scrollToTop()}}>
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/hobbies" onClick={() => {setToggleMenu(false); scrollToTop()}}>
                  Hobbies
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
