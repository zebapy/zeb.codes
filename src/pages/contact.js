import React from 'react';

import Social from '../components/social';
import ContactForm from '../components/contact-form';
import Section from '../components/section';
import Layout from '../components/layout';
import PageHead from '../components/page-head';

const social = [
  {
    icon: 'codepen',
    name: 'Codepen',
    url: 'https://codepen.io/zebapy'
  },
  {
    icon: 'github',
    name: 'GitHub',
    url: 'https://github.com/zebapy'
  },
  {
    icon: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/zebhdiyah'
  },
  {
    icon: 'codesandbox',
    name: 'Codesandbox',
    url: 'https://codesandbox.io/u/zebapy'
  },
  {
    icon: 'linkin',
    name: 'Linkedin',
    url: 'https://linkedin.com/in/zebpykosz'
  }
];

export default () => (
  <Layout>
    <PageHead
      title="Contact"
      text={
        <span>
          If you have a project to talk about, you can email me directly at{' '}
          <a href="mailto:hi@zeb.codes" className="link">
            hi@zeb.codes
          </a>{' '}
          or use this form.
        </span>
      }
    />
    <ContactForm />
    <Section
      title="Social"
      text="Connect with me on a handful of other platforms. Collect 'em all."
    >
      <Social items={social} />
    </Section>
  </Layout>
);
