import React from 'react';

export default ({ pagetitle, title, text, children }) => {
  return (
    <section className="section">
      <header className="section-header">
        {pagetitle && <h1 className="section-title">{pagetitle}</h1>}
        {title && <h2 className="section-title">{title}</h2>}
        {text && <p className="section-text">{text}</p>}
      </header>
      <div className="section-body">{children}</div>
    </section>
  );
};
