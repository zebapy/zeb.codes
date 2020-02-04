import React from 'react';

import PageHead from '../components/page-head';
import ContactForm from '../components/contact-form';

export default () => (
  <>
    <PageHead
      title="Let's talk"
      text={
        <span>
          If you have a project you'd like to discuss, you can reach me at{' '}
          <a href="mailto:hi@zeb.codes" className="link">
            hi@zeb.codes
          </a>{' '}
          or fill out this handy form and I'll get back to you as soon.
        </span>
      }
    />
    <ContactForm />
  </>
);
