import React from 'react';

const Skillbar = ({ items }) => {
  return (
    <ul className="skill-list">
      {items.map(item => (
        <li key={item} className="skill-item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Skillbar;
