import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Project from './project';

const ProjectList = () => (
  <StaticQuery
    query={graphql`
      query projectsQuery {
        work: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/projects/" } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                date
                tags
                project_url
                summary
              }
            }
          }
        }
      }
    `}
  >
    {data => (
      <div>
        {data.work.edges.map(({ node }) => (
          <Project key={node.id} {...node.frontmatter} />
        ))}
      </div>
    )}
  </StaticQuery>
);

export default ProjectList;
