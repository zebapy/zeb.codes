import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

const ProjectCard = ({ title, date, slug, text, thumb }) => {
  return (
    <article className="work-card">
      <figure className="work-card-figure">
        <Link to={slug}>{thumb && <Img fluid={thumb} />}</Link>
      </figure>
      <div className="work-card-body">
        <time>{date}</time>
        <h2 className="work-card-title">
          <Link to={slug}>{title}</Link>
        </h2>
        {text && <p className="work-card-text">{text}</p>}
        {/* <Link to={slug} className="work-card-cta link">
          View project &rarr;
        </Link> */}
      </div>
    </article>
  );
};

const ProjectList = ({ limit = 9999, side: sideProjects }) => {
  const data = useStaticQuery(graphql`
    query workQuery {
      work: allMdx(
        filter: { fields: { slug: { regex: "/work/.+/" } } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY")
            title
            project
            text
            thumb {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  // if sideprojects prop is passed, we should get all work pieces that have project frontmatter
  const filter = node =>
    sideProjects
      ? node.frontmatter.project === true
      : node.frontmatter.project === null;

  const items = data.work.nodes.filter(filter);

  const limitedItems = items.slice(0, limit);

  return (
    <ul className="work-list">
      {limitedItems.map(node => {
        const { title, date, text, thumb } = node.frontmatter;
        return (
          <li key={node.id} className="work-item">
            <ProjectCard
              title={title}
              text={text}
              date={date}
              slug={node.fields.slug}
              thumb={thumb ? thumb.childImageSharp.fluid : null}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList;
