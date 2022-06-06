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
    <div className={styles.contactForm}>
      <section>
        <hgroup>
          <h2><span><p>GET IN </p></span> Touch</h2>
        </hgroup>
        <div>
          <div>
            <article>
              <h5>Antalya / Turkey</h5>
              <h5>ugurorcun91@gmail.com</h5>
              <h5>+90 554 436 00 39</h5>
            </article>
            <article>
              <form
                action="https://formspree.io/f/xnqwoaww"
                method="POST"
              >
                <div>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                    placeholder='Full Name Here'
                  />
                  {(formik.touched.fullName && formik.errors.fullName) && <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.fullName}</div>}
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder='E-mail Here'
                  />
                  {(formik.touched.email && formik.errors.email) && <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.email}</div>}
                </div>
                <div>
                  <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="10"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                  />
                  {(formik.touched.description && formik.errors.description) && <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.description}</div>}
                </div>
                <button
                  type="submit"
                  disabled={!(formik.isValid && formik.dirty)}
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
