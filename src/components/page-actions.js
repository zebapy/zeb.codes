import React from 'react';
import { Link } from 'gatsby';

const PageActions = ({ children }) => {
  return <div className="page-actions">{children}</div>;
};

PageActions.Item = ({ title, text, link }) => {
  return (
    <Link to={link} className="page-actions-link">
      <div className="page-actions-item">
        <h3 className="page-actions-title">{title}</h3>
        <p className="page-actions-text">{text}</p>
      </div>
    </Link>
  );
};

export default PageActions;
