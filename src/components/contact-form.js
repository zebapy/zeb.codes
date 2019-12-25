import React, { useState } from 'react';
import fetch from 'unfetch';
import cx from 'classnames';

const FormItem = props => (
  <div className={`form-item ${props.className}`}>{props.children}</div>
);

const Input = props =>
  React.createElement(props.multiline ? 'textarea' : 'input', {
    className: 'text-input',
    ...props
  });

const FormField = ({ label, id, ...rest }) => {
  return (
    <div className={`form-item form-item--${id}`}>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <Input id={id} {...rest} />
    </div>
  );
};

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ContactForm = () => {
  const [isFormSent, setIsFormSent] = useState(false);
  const [showFormError, setFormError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMsg] = useState('');

  const handleFieldChange = e => {
    const val = e.target.value;

    switch (e.target.name) {
      case 'name':
        return setName(val);
      case 'email':
        return setEmail(val);
      case 'message':
        return setMsg(val);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    setIsFormSent(false);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message })
    })
      .then(() => {
        setIsFormSent(true);
        setFormError(false);
      })
      .catch(error => {
        isFormSent(false);
        setFormError(true);
        console.log(error);
      });
  };

  if (isFormSent) {
    return <p className="alert alert--success">📧 Message sent</p>;
  }

  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="contact-form"
    >
      {showFormError && (
        <p className="alert alert--error">
          Oh no! Something went wrong. Refresh and try again?
        </p>
      )}

      <input type="hidden" name="bot-field" />
      <FormField
        id="name"
        label="Name"
        type="text"
        name="name"
        placeholder="Your name"
        value={name}
        onChange={handleFieldChange}
        spellCheck={false}
        required
      />
      <FormField
        label="Email"
        id="email"
        type="email"
        name="email"
        placeholder="hi@you.com"
        onChange={handleFieldChange}
        value={email}
        required
      />
      <FormField
        label="Message"
        id="message"
        name="message"
        placeholder="A short message for why you're contacting me..."
        onChange={handleFieldChange}
        value={message}
        required
        multiline
      />
      <FormItem className="form-item--btn">
        <button type="submit" className="btn">
          Send message
        </button>
      </FormItem>
    </form>
  );
};

export default ContactForm;
