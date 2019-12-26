import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const ProjectList = ({ side: sideProjects }) => {
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
              project
              text
            }
          }
        }
      }
    }
  `);

  // if sideprojects prop is passed, we should get all work pieces that have project frontmatter
  const filter = node =>
    sideProjects
      ? node.context.frontmatter.project === true
      : node.context.frontmatter.project === null;

  const items = data.work.nodes.filter(filter);

  return (
    <ul className="work-list">
      {items.map(node => {
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
