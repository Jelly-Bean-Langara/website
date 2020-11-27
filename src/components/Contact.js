import React from 'react';

const Contact = () => (
  <section className="contact" name="contact">
    <div className="contact__inner">
      <h2>
        Want to learn more?
        <span>Get in touch.</span>
      </h2>

      <form>
        <label htmlFor="name">
          <p>
            Name:
            <span>*</span>
          </p>
          <input id="name" type="text" placeholder="Your name" />
        </label>

        <label htmlFor="email">
          <p>
            E-mail:
            <span>*</span>
          </p>
          <input id="email" type="text" placeholder="Your E-mail" />
        </label>

        <label htmlFor="message">
          <p>
            Message:
            <span>*</span>
          </p>
          <textarea id="message" placeholder="Your message" />
        </label>
      </form>
    </div>
  </section>
);

export default Contact;
