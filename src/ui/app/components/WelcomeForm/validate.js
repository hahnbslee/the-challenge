/**
 * validate.js
 *
 * This validate function is invoked synchronously from Redux Form
 * whenever the form is submitted. Errors are passed back via the
 * errors object, whose props correspond to the name of the Redux
 * Form field experiencing the error.
 *
 * @see https://redux-form.com/7.4.2/examples/syncvalidation/
 *
 * @param {} values An immutable Map of values from Redux Form
 * @returns An errors object with any validation errors
 */
export const validate = (values) => {
  const errors = {};

  // TODO: Validate that the user has entered a username, first name, and last name
  if (!values.get('userName') || values.get('userName').trim() === '' || values.get('userName').length === 0) {
    errors.userName = 'You must enter your username.';
  }

  if (!values.get('firstName') || values.get('firstName').trim() === '' || values.get('firstName').length === 0) {
    errors.firstName = 'You must enter your First Name.';
  }

  if (!values.get('lastName') || values.get('lastName').trim() === '' || values.get('lastName').length === 0) {
    errors.lastName = 'You must enter your Last Name.';
  }

  return errors;
};
