const validate = (values) => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = 'Required';
  } else if (values.fullName.split(' ').length !== 2) {
    errors.fullName = 'Please Enter Your Full Name';
  } else if (values.fullName.split(' ').join('').length <= 3) {
    errors.fullName = 'Full Name Should be Three Characters at Least';
  } else if (values.fullName.length > 60) {
    errors.fullname = 'Full Name Should be Less then 60 Characters';
  } else if (/\d/.test(values.fullName)) {
    errors.fullName = 'Name Should not Contain Number';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid Email Adress';
  }

  if (!values.description) {
    errors.description = 'Required';
  } else if (values.description.length < 10) {
    errors.description = 'Description Should be More than 10 Characters';
  }

  return errors;
};

export default validate;
