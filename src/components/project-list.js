import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const ProjectList = () => {
  const data = useStaticQuery(graphql`
    query workQuery {
      work: allSitePage(
        filter: { context: { frontmatter: { roles: { ne: null } } } }
      ) {
        nodes {
          id
          path
          context {
            frontmatter {
              date
              title
              text
            }
          }
        }
      }
    }
  `);

  return (
    <ul className="work-list">
      {data.work.nodes.map(node => {
        const { title, date, text } = node.context.frontmatter;
        return (
          <li key={node.id} className="work-item">
            <article className="project">
              <h2 className="project-title">
                <Link to={node.path}>{title}</Link>
              </h2>
              <p className="project-text">{text}</p>
            </article>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList;
