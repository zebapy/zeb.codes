import React from 'react';
import Helmet from 'react-helmet';

import '../styles/index.scss';

import Header from './header';

const Layout = ({ children, pageContext }) => {
  const { title } = pageContext.frontmatter;
  return (
    <div className="container">
      <Helmet title={title}>
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather|Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
