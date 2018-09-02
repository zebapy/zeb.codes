import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Skillbar = () => (
  <StaticQuery
    query={graphql`
      query skillbarQuery {
        skills: allSkillsYaml {
          edges {
            node {
              level
              name
              color
            }
          }
        }
      }
    `}
  >
    {data => (
      <ul className="skill-list">
        {data.skills.edges.map(({ node }) => (
          <li className="skill-item" key={node.name}>
            <span className="skill-label" title={node.name}>
              {node.name}
            </span>
            <div
              className="skill-bar"
              data-level={node.level}
              style={{
                background: node.color,
                width: node.level + '%'
              }}
            />
          </li>
        ))}
      </ul>
    )}
  </StaticQuery>
);

export default Skillbar;
