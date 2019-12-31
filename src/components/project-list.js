import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const ProjectCard = ({ title, slug, text }) => {
  return (
    <article className="work-card">
      <Link to={slug}>
        <figure>
          <img src="//placehold.it/640x360" />
        </figure>
        <h2 className="work-card--title">{title}</h2>
        <p className="work-card-text">{text}</p>
      </Link>
    </article>
  );
};

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
            <ProjectCard title={title} text={text} slug={node.path} />
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList;
