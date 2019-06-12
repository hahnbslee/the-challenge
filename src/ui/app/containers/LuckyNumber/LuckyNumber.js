/**
 * LuckyNumber.js
 *
 * This container controls the props used to render the lucky number.
 * It fetches props from the Redux store.
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { CONTAINER_KEY } from '../constants';
import LuckyNumberDisplay from '../../components/LuckyNumberDisplay/LuckyNumberDisplay';

class LuckyNumber extends React.PureComponent {
  render() {
    return (
      <article>
        <Helmet>
          <title>Lucky Number</title>
        </Helmet>

        <LuckyNumberDisplay {...this.props} />
      </article>
    );
  }
}

// const mapStateToProps = (state) =>
// TODO: Get values from Redux store
function mapStateToProps(state) {

  return {
    luckyNumber: state.getIn([CONTAINER_KEY, 'luckyNumber']),
    firstName: state.getIn([CONTAINER_KEY, 'firstName']),
    lastName: state.getIn([CONTAINER_KEY, 'lastName'])
  };
}
export default connect(mapStateToProps)(LuckyNumber);
