import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import ProjectList from '../components/project-list';
import Skillbar from '../components/skillbar';
import ContactForm from '../components/contact-form';

import '../styles/app.scss';

const HomePage = ({ data }) => {
  const { site, social } = data;
  const { buildTime, siteMetadata } = site;
  const { gravatar, name, email, description } = siteMetadata;
  return (
    <div className="container">
      <Helmet>
        <meta name="author" content={name} />
        <meta name="description" content={description} />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        {/* <meta property="og:title" content="{{ site.title }}" />
        <meta property="og:description" content="{{ site.description }}" />
        <meta property="og:site_name" content="{{ site.author }}" />
        <meta property="og:image" content="{{site.image_path}}" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="{{ site.url }}" />
        <meta name="twitter:image" content="{{ site.image_path }}" />
        <meta name="twitter:title" content="{{ site.title }}" />
        <meta name="twitter:description" content="{{ site.description }}" /> */}
        <link
          href="http://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
          type="text/css"
        />
      </Helmet>
      <section className="section" id="hero">
        <div className="">
          <h1 className="font-huge mb0 color-primary">Hello, I'm Zeb Pykosz</h1>
          <h2 className="color-primary">
            I am a web developer and multidisciplinary designer based in
            Middlebury, Vermont.
          </h2>
          <a href="#work" className="btn btn-primary">
            View my work
          </a>
          <a href="#about" className="btn btn-secondary">
            Learn more about me
          </a>
        </div>
      </section>

      <section className="section" id="work">
        <div className="row">
          <div className="col-md-2">
            <h1 className="section-title text-md-right">Work</h1>
          </div>
          <div className="col-md-10 section-content">
            <ProjectList />
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="row">
          <div className="col-md-6 col-lg-8">
            <div className="row">
              <div className="col-md-3">
                <h1 className="section-title text-md-right">About</h1>
              </div>
              <div className="col-md-9 section-content">
                <img src={gravatar} alt={name} className="img-round" />
                <p>
                  I&rsquo;m a designer and front-end developer born and raised
                  in rural Vermont. I am primarily self-taught with {buildTime}{' '}
                  combined years of freelance and professional experience. I
                  have a passion for writing code and tweaking pixels.
                </p>
                <p>
                  I am currently employed at Middlebury College where I develop
                  micro and Wordpress sites, and do front-end for Drupal themes.
                </p>
                <p>
                  I am also co-founder of a project called Fateseal which
                  consumes a lot of my free time. You can learn more about it in
                  my <a href="#work">portfolio</a>.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="row">
              <div className="col-md-3">
                <h1 className="section-title text-md-right">Skills</h1>
              </div>
              <div className="col-md-9 section-content">
                <Skillbar />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="row">
          <div className="col-md-6 col-lg-8">
            <div className="row">
              <div className="col-md-3">
                <h1 className="section-title text-md-right">Contact</h1>
              </div>
              <div className="col-md-9 section-content">
                <p className="lead">
                  Want to say hello or talk to me about a project you have? I'd
                  be happy to hear from you. If you prefer, you can also email
                  me at <a href={`mailto:${email}`}>{email}</a>
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="row">
              <div className="col-md-3">
                <h1 className="section-title text-md-right">Elsewhere</h1>
              </div>
              <div className="col-md-9 section-content">
                <ul className="social-list">
                  {social.edges.map(({ node }) => (
                    <li className="social-item" key={node.place}>
                      <a href={node.url} className="social-anchor">
                        {node.place}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="global-footer">
        <p>
          {name} &copy; {buildTime} &middot;{' '}
          <a href="https://github.com/zebapy/zeb.codes">View source</a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query homeQuery {
    site {
      buildTime
      siteMetadata {
        name
        email
        gravatar
      }
    }
    social: allSocialYaml {
      edges {
        node {
          place
          username
          url
        }
      }
    }
  }
`;
