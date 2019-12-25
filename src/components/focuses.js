import React from 'react';

const Focuses = ({ items = [] }) => {
  return (
    <section className="focuses">
      <h2 className="focuses-title">Focuses</h2>
      {items.map(({ title, text }) => (
        <div key={title} className="focus">
          {/* dangerously set sine we use abbr in the seo focus */}
          <h3
            dangerouslySetInnerHTML={{ __html: title }}
            className="focus-title"
          />
          <p className="focus-text">{text}</p>
        </div>
      ))}
    </section>
  );
};

export default Focuses;
