import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';

import PageHead from '../components/page-head';
import PageActions from '../components/page-actions';

const PageTemplate = ({ data }) => {
  const {
    title,
    text,
    pageActions,
    image,
    imageClassName
  } = data.mdx.frontmatter;
  const { body } = data.mdx;
  return (
    <>
      <PageHead
        title={title}
        text={text}
        media={
          image && (
            <figure>
              <img src={image} alt={''} className={imageClassName} />
            </figure>
          )
        }
      />
      <div className="markdown mb-24">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <PageActions {...pageActions} />
    </>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query pageTemplate($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        text
        image
        imageClassName
        imageAlt
        pageActions {
          work
          about
          contact
        }
      }
    }
  }
`;
