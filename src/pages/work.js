import React from 'react';

import Layout from '../components/layout';
import PageHead from '../components/page-head';
import ProjectList from '../components/project-list';
import Section from '../components/section';
import PageActions from '../components/page-actions';

export default () => (
  <Layout>
    <PageHead
      title="What I've worked on"
      text="Professional and side projects consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />

    <ProjectList />

    <PageActions about contact />
  </Layout>
);
