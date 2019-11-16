import React, { useState } from 'react';
import fetch from 'unfetch';

const FormItem = props => <div className="mb3">{props.children}</div>;

const Label = props => (
  <label className="db f7 mb2 ttu">{props.children}</label>
);

const Input = props =>
  React.createElement(props.multiline ? 'textarea' : 'input', {
    className: 'bw0 bg-near-white pa3 f5 w-100 d-block ',
    ...props
  });

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ContactForm = () => {
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

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));
  };

  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="mw5"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="bot-field" />
      <FormItem>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleFieldChange}
          spellCheck={false}
          required
        />
      </FormItem>
      <FormItem>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="hi@you.com"
          onChange={handleFieldChange}
          value={formData.email}
          required
        />
      </FormItem>
      <FormItem>
        <Label>Message</Label>
        <Input
          name="message"
          placeholder="Some kind words here..."
          onChange={handleFieldChange}
          value={formData.message}
          required
          multiline
        />
      </FormItem>
      <FormItem>
        <button
          type="submit"
          value="Send message"
          className="bw1 b--solid b--black bg-white pa2 black grow"
        >
          Send it
        </button>
      </FormItem>
    </form>
  );
};

export default ContactForm;
