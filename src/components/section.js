import React from 'react';
import { Link } from 'gatsby';

export default ({ pagetitle, title, text, children, link, linkText }) => {
  return (
    <section className="mb-32">
      <header className="pb-3">
        {pagetitle && <h1 className="">{pagetitle}</h1>}
        {title && <h2 className="h2">{title}</h2>}
        {text && <p className="text-xl">{text}</p>}
      </header>
      <div className="mb-4">{children}</div>

      {link && linkText && (
        <div className="text-center">
          <Link to={link} className="btn btn--alt">
            <span>{linkText}</span>
          </Link>
        </div>
      )}
    </section>
  );
};
