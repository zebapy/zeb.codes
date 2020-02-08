import React from 'react';
import { Link } from 'gatsby';

import ArrowRight from '../assets/arrow-right.svg';

const PageActionsItem = ({ title, text, link }) => {
  return (
    <div className="page-action">
      <Link to={link} className="page-action-link">
        <h3 className="h2 page-action-title">{title}</h3>
        <p className="page-action-text">{text}</p>
        <ArrowRight className="page-action-icon" />
      </Link>
    </div>
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
          text="Learn about my history and skillset."
          link="/about"
        />
      )}

      {contact && (
        <PageActionsItem
          title="Need something built?"
          text="Contact me and let's find out how I can help you."
          link="/contact"
        />
      )}
    </div>
  );
};

export default PageActions;
