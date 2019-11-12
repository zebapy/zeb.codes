import React from 'react';

const FormItem = props => <div className="mb3">{props.children}</div>;

const Label = props => (
  <label className="db f7 mb2 ttu">{props.children}</label>
);

const Input = props =>
  React.createElement(props.multiline ? 'textarea' : 'input', {
    className: 'bw0 bg-near-white pa3 f5 w-100 d-block ',
    ...props
  });

const ContactForm = () => (
  <form
    name="contact"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    className="mw5"
  >
    <input type="hidden" name="bot-field" />
    <FormItem>
      <Label>Name</Label>
      <Input
        type="text"
        name="name"
        placeholder="Your name"
        spellCheck={false}
        required
      />
    </FormItem>
    <FormItem>
      <Label>Email</Label>
      <Input type="email" name="email" placeholder="hi@you.com" required />
    </FormItem>
    <FormItem>
      <Label>Message</Label>
      <Input
        name="message"
        placeholder="Some kind words here..."
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

export default ContactForm;
