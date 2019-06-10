/**
 * WelcomeForm.js
 *
 * This component contains the Redux Form used to collect user input.
 * Its props are passed down from the Welcome container.
 *
 * @see https://redux-form.com/7.4.2/docs/api/field.md/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form/immutable';
import Button from '@material-ui/core/Button';
import { RFTextField } from 'components/ReduxFormFields/RFTextField';

import { validate } from './validate';


class WelcomeForm extends React.PureComponent {
  onSubmit = (values) => {
    /* eslint no-underscore-dangle: ["error", { "allow": ["foo_", "_root"] }] */
    // const { root } = values.Map._root;
    console.log(values);
    this.props.submit(values);
  }
  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        onSubmit={handleSubmit(this.onSubmit)}
        className="flex flex-column"
      >
        {/* TODO: Add elements to form to collect user input */}
        <Field
          name="userName"
          component={RFTextField}
          label="Enter username"
        />
        <Field
          name="firstName"
          component={RFTextField}
          label="Enter First Name"
        />
        <Field
          name="lastName"
          component={RFTextField}
          label="Enter Last Name"
        />
        <div className="center mt3">
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

WelcomeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submit: PropTypes.func
};

// TODO: Add validation
// @see https://redux-form.com/7.4.2/docs/api/reduxform.md/
// const formWrapped = reduxForm({
//   form: 'welcome',
//   validate
// })(WelcomeForm);
// export default connect(null, { getLuckyNumber })(formWrapped);
export default reduxForm({
  form: 'welcome',
  validate
})(WelcomeForm);
