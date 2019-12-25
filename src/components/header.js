import React from 'react';

import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        Zeb Pykosz
      </Link>

      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/work" className="nav-link" activeClassName="active">
              Work
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" activeClassName="active">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" activeClassName="active">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
