import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import GithubIcon from '../images/github.svg';
import TwitterIcon from '../images/twitter.svg';
import LinkedinIcon from '../images/linkedin.svg';
import EmailIcon from '../images/email.svg';

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
    <ul className={`social social--${variant}`}>
      {data.allSocialYaml.nodes.map(({ name, url, platform, handle }) => (
        <li key={name}>
          <a href={url} aria-label={platform}>
            <img src={icons[name]} alt={platform} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
