import React from 'react';
import Helmet from 'react-helmet';

import Header from './header';
import Footer from './footer';

import '../styles/index.scss';

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
      <Footer />
    </div>
  );
};

export default Layout;
