const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: 'slug',
      node,
      value
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const pageTemplate = path.resolve('./src/templates/page.js');
  const workTemplate = path.resolve('./src/templates/project.js');
  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          nodes {
            id
            # query title for next/prev usage
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw new Error(result.errors);
  }

  const { nodes } = result.data.allMdx;
  const projects = nodes.filter(node => node.fields.slug.includes('/work'));
  const pages = nodes.filter(node => node.fields.slug.includes('/pages'));

  projects.forEach((node, index) => {
    const previous = index === projects.length - 1 ? null : projects[index + 1];
    const next = index === 0 ? null : projects[index - 1];
    const { slug } = node.fields;

    createPage({
      path: slug,
      component: workTemplate,
      context: {
        slug: slug,
        previous,
        next
      }
    });
  });

  pages.forEach(node => {
    createPage({
      // remove the /pages prefix from pages in content directory
      path: node.fields.slug.replace('/pages', ''),
      component: pageTemplate,
      context: {
        // this is the original slug since we need to look up the mdx object by it
        slug: node.fields.slug
      }
    });
  });
};
