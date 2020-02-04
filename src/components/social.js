import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import GithubIcon from '../assets/github.svg';
import TwitterIcon from '../assets/twitter.svg';
import LinkedinIcon from '../assets/linkedin.svg';
import EmailIcon from '../assets/email.svg';

const icons = {
  github: GithubIcon,
  twitter: TwitterIcon,
  linkedin: LinkedinIcon,
  email: EmailIcon
};

const Social = ({ className, variant }) => {
  const data = useStaticQuery(graphql`
    query socialQuery {
      allSocialYaml {
        nodes {
          name
          url
          handle
        }
      }
    }
  `);

  return (
    <ul className="social">
      {data.allSocialYaml.nodes.map(({ name, url, platform, handle }) => {
        const Icon = icons[name];
        return (
          <li key={name}>
            <a href={url} title={platform}>
              <Icon aria-hidden="true" focusable="false" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
