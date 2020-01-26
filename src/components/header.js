import React from 'react';

import { Link } from 'gatsby';

const navLinkClass = 'uppercase tracking-wider font-bold';

const Header = () => {
  return (
    <header className="lg:flex justify-between py-4">
      <Link to="/" className="block uppercase tracking-wider font-bold mb-2">
        Zeb Pykosz
      </Link>

      <nav className="">
        <ul className="flex">
          <li className="mr-5">
            <Link to="/work" className={navLinkClass} activeClassName="link">
              Work
            </Link>
          </li>
          <li className="mr-5">
            <Link to="/about" className={navLinkClass} activeClassName="link">
              About
            </Link>
          </li>
          <li className="mr-5">
            <Link to="/contact" className={navLinkClass} activeClassName="link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
