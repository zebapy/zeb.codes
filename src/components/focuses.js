import React from 'react';

const Focuses = ({ items = [] }) => {
  return (
    <ul className="grid-4">
      {items.map(({ title, text }) => (
        <li key={title} className="focus">
          {/* dangerously set sine we use abbr in the seo focus */}
          <h3
            dangerouslySetInnerHTML={{ __html: title }}
            className="focus-title"
          />
          <p className="focus-text">{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default Focuses;
