import React from 'react';

export default ({ title, text }) => (
  <header className="pagehead">
    <h1 className="pagehead-title">{title}</h1>
    {text && <p className="pagehead-text">{text}</p>}
  </header>
);
