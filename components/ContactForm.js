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
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form>
      <div>
        <label htmlFor="fullname">Full Name</label>
        <input
          id="fullname"
          name="fullname"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
          />
          {(formik.touched.fullName && formik.errors.fullName) && <div>{formik.errors.fullName}</div>}
      </div>
      <div>
        <label htmlFor="email">Email Adress</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {(formik.touched.email && formik.errors.email) && <div>{formik.errors.email}</div>}        
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea name="description"
          id="description"
          cols="30" 
          rows="10"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          >
          Please add description here...
        </textarea>
        {(formik.touched.description && formik.errors.description) && <div>{formik.errors.description}</div>}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm