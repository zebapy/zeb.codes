import React from 'react';
import { Link } from 'gatsby';

const PageActionsItem = ({ title, text, link }) => {
  return (
    <Link to={link} className="page-actions-link">
      <div className="page-actions-item">
        <h3 className="page-actions-title">{title}</h3>
        <p className="page-actions-text">{text}</p>
      </div>
    </Link>
  );
};

const PageActions = ({ work, about, contact }) => {
  return (
    <div className="page-actions">
      {work && (
        <PageActionsItem
          title="View my work"
          text="See some of my projects"
          link="/work"
        />
      )}

      {about && (
        <PageActionsItem
          title="Get to know me"
          text="Learn about my history and what I focus on."
          link="/about"
        />
      )}

      {contact && (
        <PageActionsItem
          title="Have a project?"
          text="Contact me and let's find out how I can help you."
          link="/contact"
        />
      )}
    </div>
  );
};

export default PageActions;
