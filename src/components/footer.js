import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Social from './social';

export default () => {
  const data = useStaticQuery(graphql`
    query footerQuery {
      site {
        buildTime(formatString: "YYYY")
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <footer className="footer">
      <div className="footer-info">
        <span>
          {data.site.siteMetadata.title} &copy; {data.site.buildTime}
        </span>
        <span>
          Site built with{' '}
          <a href="https://www.gatsbyjs.org/" className="link">
            Gatsby
          </a>
        </span>
        <span>
          <a href="https://github.com/zebapy/zeb.codes" className="link">
            View the code
          </a>
        </span>
      </div>

      <div className="footer-social">
        <Social variant="footer" />
      </div>
    </footer>
  );
};
