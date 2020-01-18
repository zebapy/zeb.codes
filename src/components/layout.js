import React from 'react';
import Helmet from 'react-helmet';

import Header from './header';
import Footer from './footer';
import PageHead from './page-head';
import Cursor from './cursor';

import '../styles/index.scss';

const GridLines = () => (
  <div className="grid-lines container">
    {Array(8)
      .fill()
      .map((_, i) => (
        <div className="grid-lines-item" key={i} />
      ))}
  </div>
);

const Layout = ({ children, pageContext }) => {
  const { title, is_front, text } = pageContext.frontmatter;

  return (
    <div className="container">
      <Helmet title={title}>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap"
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
      {/* <Cursor /> */}
    </div>
  );
};

export default Layout;
