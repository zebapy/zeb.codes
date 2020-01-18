import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

const ProjectCard = ({ title, slug, text, image }) => {
  console.log(image);
  return (
    <article className="work-card">
      <Link to={slug}>
        <figure>{image && <Img fluid={image} />}</figure>
        <div className="work-card-body">
          <h2 className="work-card-title">{title}</h2>
          <p className="work-card-text">{text}</p>
        </div>
      </Link>
    </article>
  );
};

const ProjectList = ({ side: sideProjects }) => {
  const data = useStaticQuery(graphql`
    query workQuery {
      work: allMdx(filter: { fields: { slug: { regex: "/work/.+/" } } }) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            date
            title
            project
            text
            image {
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

  return (
    <ul className="work-list">
      {items.map(node => {
        const { title, date, text, image } = node.frontmatter;
        console.log(image);
        return (
          <li key={node.id} className="work-item">
            <ProjectCard
              title={title}
              text={text}
              slug={node.fields.slug}
              image={image ? image.childImageSharp.fluid : null}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList;
