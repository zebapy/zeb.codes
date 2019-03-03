import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Anchor from './anchor';

const ProjectList = () => {
  const data = useStaticQuery(graphql`
    query projectsQuery {
      work: allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/work/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              color
              stack
              roles
              url
              text
            }
          }
        }
      }
    }
  `);

  return (
    <ul className="list pl0">
      {data.work.edges.map(({ node }) => {
        const {
          title,
          url,
          text,
          stack,
          date,
          roles,
          color
        } = node.frontmatter;
        return (
          <li key={node.id} className="mb5">
            <article
              className="pl4"
              style={{
                borderLeft: `4px solid ${color}`
              }}
            >
              <h2 className="mb1 fw5 mt0">
                <Anchor href={url}>{title}</Anchor>
              </h2>
              <p className="f4 mt0 lh-copy">{text}</p>
              <dl>
                {[
                  {
                    label: 'When',
                    text: new Date(date).toLocaleDateString()
                  },
                  {
                    label: 'Roles',
                    text: roles
                  },
                  {
                    label: 'Stack',
                    text: stack.map((tag, i) => (
                      <span key={tag}>
                        {tag}
                        {i !== stack.length - 1 ? ', ' : ''}
                      </span>
                    ))
                  }
                ].map(item => (
                  <div className="flex mb1 gray" key={item.label}>
                    <dt className="">{item.label}</dt>
                    <dd className="">{item.text}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList;
