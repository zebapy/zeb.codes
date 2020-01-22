import React from 'react';

import Focuses from '../components/focuses';
import Section from '../components/section';
import Skills from '../components/skills';
import Layout from '../components/layout';
import PageHead from '../components/page-head';
import PageActions from '../components/page-actions';
import SEO from '../components/seo';

const focuses = [
  {
    title: 'User Experience (UX)',
    text:
      "We build sites to serve customers. Customers have high expectations set by tech giants   which have teams to invest resources into the UX decision. You have to keep up with the status quo or be left behind. I stay on top of web trends and user experience patterns to ensure the projects I work on are up to snuff and won't lose your customers because of a outdated experience they have no idea how to navigate."
  },
  {
    title: 'Performance',
    text:
      'The slower your website, the higher probablity users will abandon. Numerous studies have shown that page speed also relates to revenue gains. Users browsing over slow mobile data also have a need to be fulfilled. The performance pillar is one I focus intensly on to ensure your site loads as fast as possible for the customer.'
  },
  {
    title: 'Accessibility',
    text:
      'We owe it to fellow humans to not exclude them if we have a service they need access to. Accessibility is a core feature to be included in website builds, to make sure it is usable to those with visual, auditory, or other impairments. Font colors need to contrast. Navigation needs to be usable via keyboard or voice commands. These are just 2 examples of lengthy requirements to be tested against when it comes to your site.'
  },
  {
    title: 'Responsive',
    text:
      "Browsing the web on a mobile device has grown exponentially over the last decade. Websites need to be device agnostic, adapting to any device or screen size they may be viewed on whether it's an old smart phone or the latest tablet. I build sites that are responsive, meaning it has one code base (instead of a separate mobile-only website which increases maintenance burden) to serve all screens."
  },
  {
    title: 'Search Engine Optimization (SEO)',
    text:
      'Websites need to built with specific code in specific areas to ensure search engines can interpet their content and rank them accordingly.'
  }
];

const tech = [
  'HTML5',
  'CSS3',
  'Sass',
  'Styled Components',
  'JavaScript',
  'Node.js',
  'React',
  'GraphQL',
  'Redux',
  'Apollo',
  'WordPress',
  'Gatsby',
  'Nextjs',
  'Zeit Now',
  'VSCode',
  'GitHub',
  'Figma',
  'Mac OS'
];

const tools = [];

const title = 'About me';

export default () => (
  <Layout>
    <SEO title={title} />

    <div className="about-grid">
      <div className="about-pic">
        <figure className="diamond-pic">
          <img
            src={require('../images/zeb-portrait.jpg')}
            alt="Zeb looking like he knows something."
          />
        </figure>
      </div>
      <div className="about-content">
        <h1 className="pagehead-title">{title}</h1>
        <p>
          I'm first and foremost a front-end (whoa) developer with a penchant
          for UI design, born and raised in rural Vermont, US. I am primarily
          self-taught with 7 combined years of freelance and professional
          experience. I have a passion for writing code and tweaking pixels. I'm
          always hungry to code and learn more.
        </p>

        <p>
          I am currently employed at Middlebury College as a web developer where
          I collaborate with my team to build micro sites, Wordpress themes,
          create frontend design systems for numerous Drupal sites, and develop
          custom HTML emails. I enjoy working on tooling and finding ways to
          improve workflows.
        </p>

        <p>
          I am also the creator/maintainer of a project called Fateseal which
          has consumed a lot of my free time. Check it out in my projects.
        </p>

        <h3>Preferred tech and tools</h3>

        <Skills items={tech} />

        <Skills items={tools} />
      </div>
    </div>

    <Section
      title="Focuses"
      text="There are many aspects that build up a successful website. These are just a handful of what I focus on."
    >
      <Focuses items={focuses} />
    </Section>

    <PageActions work contact />
  </Layout>
);
