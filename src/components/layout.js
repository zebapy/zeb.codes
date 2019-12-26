import React from 'react';
import Helmet from 'react-helmet';

import Header from './header';
import Footer from './footer';

import PageHead from './page-head';

import '../styles/index.scss';

const Layout = ({ children, pageContext }) => {
  const { title, is_front, text } = pageContext.frontmatter;

  return (
    <div className="container">
      <Helmet title={title}>
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather|Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Header />
      <main>
        {is_front ? (
          children
        ) : (
          <article>
            <PageHead title={title} text={text} />
            {children}
          </article>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
