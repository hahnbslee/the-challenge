/**
 * RFTextField.js
 *
 * This special component is used within the Redux Form Field component.
 * It renders a textbox component from the Material UI library.
 * It gets passed special props from Redux Form.
 *
 * @see https://redux-form.com/7.4.2/docs/api/field.md/#props
 */

import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

export const RFTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => {
  let error1;
  if (error) {
    error1 = true;
  } else {
    error1 = false;
  }
  return (
    <TextField
      label={label}
      error={touched && error1}
      {...input}
      {...custom}
    />
  );
};

RFTextField.propTypes = {
  input: PropTypes.any.isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.any
  }).isRequired
};
