import React from 'react';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import PageHead from '../components/page-head';
import SEO from '../components/seo';
import PageActions from '../components/page-actions';

const ProjectNavItem = ({ to, title, text }) => (
  <Link to={to} className="block">
    <span className="block font-bold">{title}</span>
    {text && <span className="text-lg">{text}</span>}
  </Link>
);

const ProjectNav = ({ next, prev }) => (
  <nav className="mb-4">
    <ul className="clearfix text-center">
      {prev && (
        <li className="float-left text-left">
          <ProjectNavItem
            to={prev.fields.slug}
            title={<span>&larr; Previous Project</span>}
            text={prev.frontmatter.title}
          />
        </li>
      )}
      <li className="">
        <ProjectNavItem to="/work" title="All Projects" />
      </li>
      {next && (
        <li className="float-right text-right">
          <ProjectNavItem
            to={next.fields.slug}
            title={<span>Next Project &rarr;</span>}
            text={next.frontmatter.title}
          />
        </li>
      )}
    </ul>
  </nav>
);

const Details = ({ date, formattedDate, client, roles, tech }) => (
  <dl className="mb-24">
    {[
      {
        term: 'Year',
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
        term: 'tech',
        text: tech && tech.join(', ')
      }
    ].map(
      ({ term, text }) =>
        text && (
          <div key={term} className="flex mb-3">
            <dt className="tracking-wide uppercase font-bold text-sm pr-3">
              {term}
            </dt>
            <dd className="text-sm">{text}</dd>
          </div>
        )
    )}
  </dl>
);

const ProjectTemplate = ({ data, pageContext }) => {
  const node = data.mdx;
  const {
    title,
    text,
    date,
    roles = [],
    tech = [],
    thumb,
    client,
    url,
    formattedDate,
    desktop,
    mobile
  } = node.frontmatter;

  const { previous: prev, next } = pageContext;

  const hasNextOrPrev = prev || next;

  const detailProps = {
    date,
    formattedDate,
    client,
    roles,
    tech
  };

  return (
    <Layout>
      <SEO
        title={title}
        description={text}
        image={thumb.childImageSharp.fluid.src}
      />
      <article className="mb-24">
        <PageHead
          title={title}
          text={text}
          backLink="/work"
          backLinkText="All Projects"
        >
          <Details {...detailProps} />
        </PageHead>

        <figure className="project-figure">
          {desktop && (
            <div className="project-desktop">
              <Img fluid={desktop.childImageSharp.fluid} />
            </div>
          )}
          {mobile && (
            <div className="project-mobile">
              <Img fluid={mobile.childImageSharp.fluid} />
            </div>
          )}
        </figure>

        <div className="project-wrap"></div>

        <div className="project-body">
          <MDXRenderer>{node.body}</MDXRenderer>
        </div>

        {url && (
          <div className="text-center mb-24">
            <a href={url} className="btn">
              <span>Visit website</span>
            </a>
          </div>
        )}
      </article>

      {hasNextOrPrev && <ProjectNav next={next} prev={prev} />}
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
        formattedDate: date(formatString: "YYYY")
        date
        tech
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
        desktop {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mobile {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`;
