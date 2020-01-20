import React from 'react';
import { Link } from 'gatsby';

export default ({ pagetitle, title, text, children, link, linkText }) => {
  return (
    <section className="section">
      <header className="section-header">
        {pagetitle && <h1 className="section-title">{pagetitle}</h1>}
        {title && <h2 className="section-title">{title}</h2>}
        {text && <p className="section-text">{text}</p>}
      </header>
      <div className="section-body">{children}</div>

      {link && linkText && (
        <div className="section-footer">
          <Link to={link} className="btn btn--alt">
            <span>{linkText}</span>
          </Link>
        </div>
      )}
    </section>
  );
};
