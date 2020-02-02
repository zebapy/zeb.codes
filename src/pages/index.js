import React from 'react';

import Hero from '../components/hero';
import Section from '../components/section';
import PageActions from '../components/page-actions';
import ProjectList from '../components/project-list';
import Layout from '../components/layout';
import PageHead from '../components/page-head';

import SEO from '../components/seo';

export default () => (
  <>
    <SEO />
    <Hero
      avatar="https://en.gravatar.com/userimage/14820278/32195afe52a1a37bc55e31a06736dedc.jpg?size=100"
      alt="Zeb Pykosz looking dapper"
      title="Nice to meet you. I&rsquo;m Zeb. I build things on the internet for a living."
      text="I&rsquo;m a front-end software developer located in Middlebury, Vermont. I&rsquo;m passionate about code that makes peoples&rsquo; lives easier while helping individuals and businesses increase their reach and ability."
    />
    <Section title="Featured work" link="/work" linkText="View more work">
      <ProjectList limit={2} />
    </Section>

    <PageActions about contact />
  </>
);
