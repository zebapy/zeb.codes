import React from 'react';

import SEO from './seo';

const PageHead = ({ title, text }) => (
  <header className="pagehead">
    <SEO title={title} description={text} />
    <h1 className="pagehead-title">{title}</h1>
    {text && <p className="pagehead-text">{text}</p>}
  </header>
);

export default PageHead;
