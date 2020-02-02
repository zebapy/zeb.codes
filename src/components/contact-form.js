import React, { useState } from 'react';
import fetch from 'unfetch';

const Input = props => {
  const _props = {
    className: 'p-3 w-full block appearance-none text-xl border-4 border-black',
    ...props
  };

  let content = <input {..._props} />;

  if (props.multiline) {
    content = <textarea {..._props} style={{ minHeight: 200 }} />;
  }

  return content;
};

const FormField = ({ label, id, ...rest }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block font-bold text-xl tracking-tighter">
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
    return <p className="alert alert--success">Message sent</p>;
  }

  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="mb-32 xl:w-2/3"
    >
      {showFormError && (
        <p className="alert alert--error">
          Oh no! Something went wrong. Refresh and try again?
        </p>
      )}

      <input type="hidden" name="bot-field" />
      <FormField
        id="name"
        label="Your name"
        type="text"
        name="name"
        value={name}
        onChange={handleFieldChange}
        spellCheck={false}
        required
      />
      <FormField
        label="Your email"
        id="email"
        type="email"
        name="email"
        onChange={handleFieldChange}
        value={email}
        required
      />
      <FormField
        label="Message"
        id="message"
        name="message"
        onChange={handleFieldChange}
        value={message}
        required
        multiline
      />
      <div className="mb-3">
        <button type="submit" className="btn">
          <span>Send message</span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
