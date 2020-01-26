import React from 'react';

import SEO from './seo';
import { Link } from 'gatsby';

const PageHead = ({ title, text, backLinkText, backLink, children }) => (
  <header className="pt-6 mb-24 md:mb-32">
    <SEO title={title} description={text} />
    {backLink && backLinkText && (
      <nav>
        <Link to={backLink} className="btn btn--sm">
          <span>&larr; {backLinkText}</span>
        </Link>
      </nav>
    )}
    <div className="md:w-2/3 lg:w-1/2">
      <h1 className="h1">{title}</h1>
      {text && <p className="text-xl">{text}</p>}
    </div>

    <div className="">{children}</div>
  </header>
);

export default PageHead;
