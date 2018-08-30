import React from 'react';

const Project = ({ title, date, text, summary, tags, url, color }) => (
  <div className="project">
    <div className="project-summary">
      <div className="row">
        <div className="col-md-8">
          <h2 className="project-title mt0">
            <a href={url}>{title}</a>
          </h2>
          <p>{summary}</p>
          <p className="project-tags">
            {tags.map(tag => (
              <span key={tag}>#{tag} </span>
            ))}
          </p>
        </div>
        <div className="col-md-4 text-md-right">
          <a href={url} className="btn btn-secondary project-btn">
            <span className="open-text">View project</span>
            <span className="close-text">Thanks, I'm done looking</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Project;
