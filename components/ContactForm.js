import React from 'react';
import { useFormik } from 'formik';
import validate from '../helpers/contactFormValidator';

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
          />
          {(formik.touched.email && formik.errors.email) && <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.email}</div>}
        </label>
      </div>
      <div>
        <label htmlFor="description">
          Message
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
        </label>
      </div>
      <button
        type="submit"
        disabled={!(formik.isValid && formik.dirty)}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
