import React from 'react';

const Project = ({ title, date, text, summary, tags, url, color }) => (
  <div class="project">
    <div class="project-summary">
      <div class="row">
        <div class="col-md-8">
          <h2 class="project-title mt0">
            <a href={url}>{{ title }}</a>
          </h2>
          <p>{summary}</p>
          <p class="project-tags">
            {tags.map(tag => (
              <span key={tag}>{tag}</span>
            ))}
          </p>
        </div>
        <div class="col-xs-12 col-md-4 text-md-right">
          <a href={url} class="btn btn-secondary project-btn">
            <span class="open-text">View project</span>
            <span class="close-text">Thanks, I'm done looking</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Project;
