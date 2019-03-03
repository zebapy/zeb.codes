import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Skillbar = () => {
  const data = useStaticQuery(graphql`
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
  `);

  return (
    <ul className="list pl0">
      {data.skills.edges.map(({ node }) => (
        <li key={node.name}>
          <div
            style={{
              display: 'block',
              height: 10,
              background: node.color,
              width: node.level + '%'
            }}
          >
            {node.name}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Skillbar;
