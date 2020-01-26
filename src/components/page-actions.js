import React from 'react';
import { Link } from 'gatsby';

const PageActionsItem = ({ title, text, link }) => {
  return (
    <div className="px-3 md:w-1/2">
      <Link
        to={link}
        className="block p-6 border border-teal hover:bg-teal transition-colors duration-200"
      >
        <div className="">
          <h3 className="text-2xl">{title}</h3>
          <p className="text-xl">{text}</p>
        </div>
      </Link>
    </div>
  );
};

const PageActions = ({ work, about, contact }) => {
  return (
    <div className="flex -mx-3 mt-24 my-8">
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
