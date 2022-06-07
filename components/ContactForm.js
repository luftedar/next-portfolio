import React from 'react';
import { useFormik } from 'formik';
import validate from '../helpers/contactFormValidator';
import styles from '../styles/ContactForm.module.scss';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      description: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={styles.contactForm} id="contact">
      <section>
        <hgroup>
          <h2><span><p>GET IN </p></span> Touch</h2>
        </hgroup>
        <div>
          <div className='get-container'>
            <article className='get-info'>
              <h5>Antalya / Turkey</h5>
              <h5>ugurorcun91@gmail.com</h5>
              <h5>+90 554 436 00 39</h5>
            </article>
            <article className='get-form'>
              <form
                action="https://formspree.io/f/xnqwoaww"
                method="POST"
              >
                <div className='input-container required'>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                    placeholder='Full Name Here'
                  />
                  {(formik.touched.fullName && formik.errors.fullName) && <div className='error-tooltip i-1'>{formik.errors.fullName}</div>}
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder='E-mail Here'
                  />
                  {(formik.touched.email && formik.errors.email) && <div className='error-tooltip i-2'>{formik.errors.email}</div>}
                </div>
                <div className='required'>
                  <textarea
                    name="description"
                    id="description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                    placeholder="Your Massage"
                  />
                  {(formik.touched.description && formik.errors.description) && <div className='error-tooltip i-3'>{formik.errors.description}</div>}
                </div>
                <button
                  type="submit"
                  disabled={!(formik.isValid && formik.dirty)}
                  className={!(formik.isValid && formik.dirty) ? 'bad-button' : 'good-button'}
                >
                  Submit
                </button>
              </form>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
