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
    <footer className="p-6 text-gray-700 text-xl flex justify-between bg-gray-200">
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
