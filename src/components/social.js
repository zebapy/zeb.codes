import React from 'react';

const Social = ({ items = [] }) => {
  return (
    <ul className="social-list">
      {items.map(({ icon, name, url }) => (
        <li key={name} className="social-item">
          <a href={url} className="social-link">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
