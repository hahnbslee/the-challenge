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
import { connect } from 'react-redux';

import { validate } from './validate';
import { getLuckyNumber } from '../../containers/actions';

class WelcomeForm extends React.PureComponent {
  onSubmit = (values) => {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_root"] }] */
    // console.log(values._root.entries[0][1]);
    this.props.getLuckyNumber(values._root.entries[0][1]);
  }
  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        onSubmit={handleSubmit}
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
  submit: PropTypes.func,
  getLuckyNumber: PropTypes.func
};

// TODO: Add validation
// @see https://redux-form.com/7.4.2/docs/api/reduxform.md/
// not needed?
// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (data) => dispatch(getLuckyNumber(data)),
// });

// const formWrapped = reduxForm({
//   form: 'welcome',
//   validate
// })(WelcomeForm);
// export default connect(mapDispatchToProps)(formWrapped); // not needed?
export default reduxForm({
  form: 'welcome',
  validate
})(WelcomeForm);
