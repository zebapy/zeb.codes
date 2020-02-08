import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import Markdown from 'react-markdown';

import ProjectList from '../components/project-list';
import Skillbar from '../components/skillbar';
import ContactForm from '../components/contact-form';
import Anchor from '../components/anchor';

import pic from './zeb.jpeg';

import 'tachyons';

const Markdownify = props => (
  <Markdown
    renderers={{
      root: 'div',
      paragraph: 'span',
      link: Anchor
    }}
    {...props}
  />
);

const Section = ({ title, text, children }) => (
  <section className="mb6">
    <h2 className="f5 mb4 bl1">{title}</h2>
    <p>{text}</p>
    {children}
  </section>
);

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query homeQuery {
      site {
        buildTime
        siteMetadata {
          name
          email
          gravatar
          tagline
          description
          intro
        }
      }
      about: markdownRemark(fileAbsolutePath: { regex: "/about/" }) {
        html
        rawMarkdownBody
      }
      social: allSocialYaml {
        edges {
          node {
            url
            name
            handle
          }
        }
      }
    }
  `);

  const { site, social } = data;
  const { buildTime, siteMetadata } = site;
  const { name, description, intro, tagline } = siteMetadata;

  return (
    <div className="bg-white sans-serif">
      <div className="center mw7 ph4">
        <Helmet>
          <title>{`${name} - ${tagline}`}</title>
          <meta name="author" content={name} />
          <meta name="description" content={description} />
        </Helmet>

        <section className="pv5">
          <img src={pic} alt="Zeb Pykosz profile photo" className="br-100" />
          <h1 className="f1 mb2">{name}</h1>
          <p className="f3 mt0 lh-copy">
            <Markdownify source={intro} />
          </p>
        </section>

        <Section title="Projects">
          <ProjectList />
        </Section>

        <Section title="About">
          <Markdown
            renderers={{
              paragraph: props => <p {...props} className="lh-copy" />,
              list: props => <ul {...props} className="pl3" />
            }}
            source={data.about.rawMarkdownBody}
          />
          {/* <Skillbar /> */}
        </Section>

        <Section title="Say hello 👋">
          <p className="lh-copy">
            If you want to reach out, I'm open to networking but not currently
            seeking new employment or freelance work. I'll get back to you in 24
            hours.
          </p>

          <ul className="list pl0 flex flex-wrap mb4">
            {social.edges.map(({ node }) => (
              <li className="mr3 mb3">
                <Anchor href={node.url}>
                  {node.name}/{node.handle}
                </Anchor>
              </li>
            ))}
          </ul>

          {/* <ContactForm /> */}
        </Section>

        <footer className="mt7 mb6">
          <p className="gray lh-copy">
            {name} &copy; {new Date(buildTime).getFullYear()} <br />
            Built with awesome open source projects ❤️{' '}
            <Anchor href="https://www.gatsbyjs.org/">Gatsby</Anchor> and{' '}
            <Anchor href="https://tachyons.io/">Tachyons</Anchor>
            <br />
            <Anchor href="https://github.com/zebapy/zeb.codes">
              View source
            </Anchor>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
