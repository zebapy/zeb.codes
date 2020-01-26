import React from 'react';

const Social = ({ items = [] }) => {
  return (
    <ul className="flex">
      {items.map(({ icon, name, url }) => (
        <li key={name} className="mr-4">
          <a href={url} className="link">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
