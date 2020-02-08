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

  const ACTION = 'https://formspree.io/mqkqdnyb';

  const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setIsFormSent(true);
      } else {
        setFormError('error');

        setIsFormSent(false);
      }
    };
    xhr.send(data);
  };

  if (isFormSent) {
    return (
      <p className="bg-secondary text-xl p-3">
        Thanks! I'll get back to you as soon as I can.
      </p>
    );
  }

  return (
    <form
      action={ACTION}
      name="contact"
      method="post"
      onSubmit={handleSubmit}
      className="mb-32 xl:w-2/3"
    >
      {showFormError && (
        <p className="bg-primary text-xl p-3">
          Oh no! Something went wrong. Refresh and try again?
        </p>
      )}

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
