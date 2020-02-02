import React from 'react';

import PageHead from '../components/page-head';
import ContactForm from '../components/contact-form';

export default () => (
  <>
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
  </>
);
