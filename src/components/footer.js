import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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
    <footer className="border-t-2 border-gray-200 py-6 text-gray-700 flex justify-between">
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
    </footer>
  );
};
