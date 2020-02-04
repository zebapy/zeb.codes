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
        <div className="footer-info-item">
          {data.site.siteMetadata.title} &copy; {data.site.buildTime}
        </div>
        <div className="footer-info-item">
          Built with awesome open source tools like{' '}
          <a href="https://www.gatsbyjs.org/" className="link">
            Gatsby
          </a>
        </div>
        <div className="footer-info-item">
          <a href="https://github.com/zebapy/zeb.codes" className="link">
            View the code
          </a>
        </div>
      </div>

      <div className="footer-social lg:hidden">
        <Social variant="footer" />
      </div>
      {/* gradients for footer icons */}
      <svg
        style={{ width: 0, height: 0, position: 'absolute' }}
        aria-hidden="true"
        focusable="false"
      >
        <linearGradient id="icon-gradient" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="var(--secondary)" />
        </linearGradient>
      </svg>
    </footer>
  );
};
