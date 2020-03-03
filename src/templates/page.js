import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import cx from 'clsx';

import PageHead from '../components/page-head';
import PageActions from '../components/page-actions';

const PageTemplate = ({ data }) => {
  const {
    title,
    text,
    pageActions,
    image,
    imageClassName,
    addMarkdownClass
  } = data.mdx.frontmatter;
  const { body } = data.mdx;

  return (
    <>
      {title && text && (
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
      )}
      <div
        className={cx('mb-24', {
          'rich-text': addMarkdownClass
        })}
      >
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
        addMarkdownClass
        pageActions {
          work
          about
          contact
        }
      }
    }
  }
`;
