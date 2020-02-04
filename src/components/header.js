import React from 'react';
import { Link } from 'gatsby';

import Social from './social';

import ArrowRight from '../assets/arrow-right.svg';

import { SlideLetters } from './page-head';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        Zeb Pykosz
      </Link>

      <nav className="nav">
        <ul className="nav-list">
          {[
            { to: '/', text: 'Hello' },
            { to: '/work', text: 'Work' },
            { to: '/about', text: 'About' },
            { to: '/contact', text: 'Contact' }
          ].map(({ to, text }, index) => (
            <li className="nav-item" key={to}>
              <Link
                to={to}
                className="nav-link"
                activeClassName="nav-link--active"
              >
                <SlideLetters>{text}</SlideLetters>

                <ArrowRight className="nav-arrow" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden lg:block self-start text-black">
        <Social />
      </div>
    </header>
  );
};

export default Header;
