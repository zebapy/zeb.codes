import React from 'react';
import Helmet from 'react-helmet';

import Header from './header';
import Footer from './footer';
import PageHead from './page-head';
import Cursor from './cursor';

import '../styles/index.scss';

const GridLines = () => (
  <div className="grid-lines container">
    {Array(11)
      .fill()
      .map((_, i) => (
        <div className="grid-lines-item" key={i} />
      ))}
  </div>
);

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Header />
      <main>{children}</main>
      <Footer />
      {/* <GridLines /> */}
      {/* <Cursor /> */}
    </div>
  );
};

export default Layout;
