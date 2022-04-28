import React from 'react';
import ContactForm from '../components/ContactForm';
import contactStyles from '../styles/Contact.module.css';

const contact = () => (
  <div className={contactStyles.contact}>
    <div>
      <h2>Hey! Let`&apos;`s get in touch</h2>
      <p>
        {' '}
        I can help you build a product ,
        feature or website Look through some
        of my work and experience! If you like what you see
        and have a project you need coded,
        do not hestiate to contact me.
      </p>
    </div>
    <div>
      <div>
        <a href="https://www.linkedin.com/in/orcunugur/" target="_blank" rel="noreferrer">Linkedin</a>
        <a href="https://github.com/luftedar" target="_blank" rel="noreferrer">Github</a>
      </div>
    </div>
    <div>
      <h1>Fill the form to meet</h1>
      <ContactForm />
    </div>
  </div>
);

export default contact;
