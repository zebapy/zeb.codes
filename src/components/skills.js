import React from 'react';

const Skillbar = ({ items }) => {
  return (
    <ul className="list-square flex flex-wrap">
      {items.map(item => (
        <li key={item} className="inline-block mb-1 w-1/2">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Skillbar;
