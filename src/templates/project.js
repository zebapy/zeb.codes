import React from 'react';

import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';

const ProjectTemplate = ({ data }) => {
  const node = data.mdx;

  return (
    <Layout>
      <h1>work</h1>

      <MDXRenderer>{node.body}</MDXRenderer>
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
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`;
