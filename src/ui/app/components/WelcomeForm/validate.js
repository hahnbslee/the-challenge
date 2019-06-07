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
export const validate = ({userName, firstName, lastName}) => {
  const errors = {};

  // TODO: Validate that the user has entered a username, first name, and last name
  if(!userName || userName.trim() === ''){
    errors.userName = 'You must enter your username.';
  }

  if(!firstName || firstName.trim() === ''){
    errors.firstName = 'You must enter your First Name.';
  }

  if(!lastName || lastName.trim() === ''){
    errors.lastName = 'You must enter your Last Name.';
  }

  return errors;
};
