import React from 'react';

import SEO from './seo';
import { Link } from 'gatsby';

const PageHead = ({ title, text, backLinkText, backLink }) => (
  <header className="pagehead">
    <SEO title={title} description={text} />
    {backLink && backLinkText && (
      <nav>
        <Link to={backLink} className="btn btn--sm">
          <span>&larr; {backLinkText}</span>
        </Link>
      </nav>
    )}
    <div className="pagehead-content">
      <h1 className="pagehead-title">{title}</h1>
      {text && <p className="pagehead-text">{text}</p>}
    </div>
  </header>
);

export default PageHead;
