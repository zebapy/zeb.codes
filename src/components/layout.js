import React from 'react';
import Helmet from 'react-helmet';

import Header from './header';
import Footer from './footer';
import PageHead from './page-head';
import Cursor from './cursor';

import '../styles/index.scss';

const GridLines = () => (
  <div className="grid-lines">
    {Array(11)
      .fill()
      .map((_, i) => (
        <div className="grid-lines-item" key={i} />
      ))}
  </div>
);

const Layout = ({ children }) => {
  return (
    <div className="font-sans">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="layout">
        <Header />
        <div className="layout-main">
          <main className="p-8 lg:p-24 ">{children}</main>
          <Footer />
        </div>
      </div>
      {/* <GridLines /> */}
      {/* <Cursor /> */}
    </div>
  );
};

export default Layout;
