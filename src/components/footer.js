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
    <footer className="footer">
      <p>
        {data.site.siteMetadata.title} &copy; {data.site.buildTime}
        <br />
        Site built with <a href="https://www.gatsbyjs.org/">Gatsby</a>
        <br />
        <a href="https://github.com/zebapy/zeb.codes">View the code</a>
      </p>
    </footer>
  );
};
