import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HiDownload, HiMenuAlt3, HiX } from 'react-icons/hi';
import { RESUME, RESUME_NAME } from '../ui';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/Work', label: 'Work' },
  { to: '/Education', label: 'Education' },
  { to: '/Hobbies', label: 'Hobbies' },
  { to: '/Contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // close the mobile menu whenever the page changes
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled || open ? ' is-solid' : ''}`}>
      <div className="ui-container nav__inner">
        <Link to="/" className="nav__brand" aria-label="D'Yaa Alyassin, home">
          <span className="nav__logo">DA</span>
          <span className="nav__name">D'Yaa Alyassin</span>
        </Link>

        <nav className="nav__links" aria-label="Main">
          {links.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}>
              {label}
            </NavLink>
          ))}
        </nav>

        <a className="ui-btn ui-btn--primary ui-btn--sm nav__cta" href={RESUME} download={RESUME_NAME}>
          <HiDownload /> Resume
        </a>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          <div className="ui-container">
            {links.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className={({ isActive }) => `nav__mobile-link${isActive ? ' is-active' : ''}`}>
                {label}
              </NavLink>
            ))}
            <a className="ui-btn ui-btn--primary nav__mobile-cta" href={RESUME} download={RESUME_NAME}>
              <HiDownload /> Download resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
