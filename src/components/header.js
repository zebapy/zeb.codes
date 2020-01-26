import React from 'react';

import { Link } from 'gatsby';

const navItemClass = 'text-right';
const navLinkClass =
  'font-bold text-xl md:text-5xl tracking-tightest block p-4';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="self-start font-bold tracking-tightest text-2xl">
        Zeb Pykosz
      </Link>

      <nav className="nav">
        <ul className="flex md:block">
          <li className={navItemClass}>
            <Link
              to="/"
              className={navLinkClass}
              activeClassName="nav-link-active"
            >
              Hello
            </Link>
          </li>
          <li className={navItemClass}>
            <Link
              to="/work"
              className={navLinkClass}
              activeClassName="nav-link-active"
            >
              Work
            </Link>
          </li>
          <li className={navItemClass}>
            <Link
              to="/about"
              className={navLinkClass}
              activeClassName="nav-link-active"
            >
              About
            </Link>
          </li>
          <li className={navItemClass}>
            <Link
              to="/contact"
              className={navLinkClass}
              activeClassName="nav-link-active"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div>social icons</div>
    </header>
  );
};

export default Header;
