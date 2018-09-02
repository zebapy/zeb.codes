import React from 'react';

const ContactForm = () => (
  <form name="contact" className="form" data-netlify>
    <div className="row">
      <div className="col-lg-6">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            spellCheck={false}
            className="form-control"
            required
          />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
            required
          />
        </div>
      </div>
    </div>
    <div className="form-group">
      <textarea
        name="message"
        placeholder="Message"
        className="form-control"
        required
      />
    </div>
    <div className="form-group form-actions">
      <input
        type="submit"
        value="Send message"
        className="btn btn-secondary"
        data-disable-with="Sending message..."
      />
    </div>
  </form>
);

export default ContactForm;
