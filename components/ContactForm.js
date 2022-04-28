import React from 'react';
import { useFormik } from 'formik';
import validate from '../helpers/contactFormValidator';
import formStyles from '../styles/Contactform.module.css';

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
    <form
      action="https://formspree.io/f/xnqwoaww"
      method="POST"
      className={formStyles.form}
    >
      <div>
        <label htmlFor="fullName">
          Full Name
          <input
            id="fullName"
            name="fullName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            className={(formik.touched.fullName && formik.errors.fullName) && 'error-input'}
          />
          {(formik.touched.fullName && formik.errors.fullName) && <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.fullName}</div>}
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email Adress
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={(formik.touched.email && formik.errors.email) && 'error-input'}
          />
          {(formik.touched.email && formik.errors.email) && <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.email}</div>}
        </label>
      </div>
      <div>
        <label htmlFor="description">
          Description
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className={(formik.touched.description && formik.errors.description) && 'error-input'}
          />
          {(formik.touched.description && formik.errors.description) && <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.description}</div>}
        </label>
      </div>
      <button
        type="submit"
        disabled={!(formik.isValid && formik.dirty)}
        className={!(formik.isValid && formik.dirty)
          ? (formStyles.disabledButton) : (formStyles.activeButton)}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
