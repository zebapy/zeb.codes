import React from 'react';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import PageHead from '../components/page-head';
import SEO from '../components/seo';
import PageActions from '../components/page-actions';

const ProjectTemplate = ({ data, pageContext }) => {
  const node = data.mdx;
  const {
    title,
    text,
    date,
    roles = [],
    tags = [],
    thumb,
    client,
    url,
    formattedDate,
    desktop,
    mobile
  } = node.frontmatter;

  const { previous: prev, next } = pageContext;

  const hasNextOrPrev = prev || next;

  return (
    <Layout>
      <SEO
        title={title}
        description={text}
        image={thumb.childImageSharp.fluid.src}
      />
      <article className="project-page">
        <PageHead
          title={title}
          text={text}
          backLink="/work"
          backLinkText="All Projects"
        />

        <figure className="project-figure">
          <Img fluid={thumb.childImageSharp.fluid} />
        </figure>

        <div className="project-wrap">
          <dl className="project-details">
            {[
              {
                term: 'Date',
                text: <time time={date}>{formattedDate}</time>
              },
              {
                term: 'Client',
                text: client
              },
              {
                term: 'Roles',
                text: roles && roles.join(', ')
              },
              {
                term: 'Tags',
                text: tags && tags.join(', ')
              }
            ].map(({ term, text }) => (
              <div key={term} className="project-details-item">
                <dt>{term}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="project-body">
          <MDXRenderer>{node.body}</MDXRenderer>
        </div>

        {url && (
          <div className="project-website-btn">
            <a href={url} className="btn">
              <span>Visit website</span>
            </a>
          </div>
        )}
      </article>

      {hasNextOrPrev && (
        <nav className="work-nav">
          <ul className="work-nav-list">
            {prev && (
              <li className="work-nav-item text-left">
                <Link to={prev.fields.slug} className="work-nav-link">
                  <span className="work-nav-title">
                    &larr; Previous Project
                  </span>
                  <span className="work-nav-text">
                    {prev.frontmatter.title}
                  </span>
                </Link>
              </li>
            )}
            <li className="work-nav-item text-center">
              <Link to="/work" className="work-nav-link">
                <span className="work-nav-title">&uarr; All Projects</span>
              </Link>
            </li>
            {next && (
              <li className="work-nav-item text-right">
                <Link to={next.fields.slug} className="work-nav-link">
                  <span className="work-nav-title">Next Project &rarr;</span>
                  <span className="work-nav-text">
                    {next.frontmatter.title}
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </Layout>
  );
};

export default ProjectTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        text
        formattedDate: date(formatString: "MMMM DD, YYYY")
        date
        tags
        client
        roles
        url

        thumb {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`;
