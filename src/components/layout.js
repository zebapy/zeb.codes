import React from 'react';
import Helmet from 'react-helmet';

import Header from './header';
import Footer from './footer';
import PageHead from './page-head';
import Cursor from './cursor';

import '../styles/index.scss';

import Transition from './transition';

const GridLines = () => (
  <div className="grid-lines">
    {Array(11)
      .fill()
      .map((_, i) => (
        <div className="grid-lines-item" key={i} />
      ))}
  </div>
);

const Layout = ({ children, location }) => {
  return (
    <div className="font-sans text-base">
      {/* <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet> */}

      <div className="layout">
        <Header />
        <div className="layout-main">
          <main className="main">
            <Transition location={location}>{children}</Transition>
          </main>
          <Footer />
        </div>
      </div>
      {/* <GridLines /> */}
      {/* <Cursor /> */}
    </div>
  );
};

export default Layout;
