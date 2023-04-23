import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiInfinite } from 'react-icons/bi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h2 style={{ color: 'wheat' }}>DA</h2>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link to="/">Home</Link>
        </li>
        <li className="p__opensans">
          <Link to="/work">Work</Link>
        </li>
        <li className="p__opensans">
          <Link to="/edu">Education</Link>
        </li>
        <li className="p__opensans">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="p__opensans">
          <Link to="/hobbies">Hobbies</Link>
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
                <Link to="/" onClick={() => setToggleMenu(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work" onClick={() => setToggleMenu(false)}>
                  Work
                </Link>
              </li>
              <li>
                <Link to="/edu" onClick={() => setToggleMenu(false)}>
                  Education
                </Link>
              </li>
              <li>
                <Link to="/skills" onClick={() => setToggleMenu(false)}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/hobbies" onClick={() => setToggleMenu(false)}>
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
