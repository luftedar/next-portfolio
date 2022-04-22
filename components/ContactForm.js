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
          value={formik.values.fullName}
          />
      </div>
      <div>
        <label htmlFor="email">Email Adress</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea name="description"
          id="description"
          cols="30" 
          rows="10"
          onChange={formik.handleChange}
          value={formik.values.description}
          >
          Please add description here...
        </textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm