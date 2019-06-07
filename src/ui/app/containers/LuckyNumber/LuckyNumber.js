/**
 * LuckyNumber.js
 *
 * This container controls the props used to render the lucky number.
 * It fetches props from the Redux store.
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { CONTAINER_KEY } from '../constants'; // use!!

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

const mapStateToProps = (state) => 
  // TODO: Get values from Redux store
   ({
 
  })
;

// const mapStateToProps = state => {
//   return {
//       streams: Object.values(state.streams),
//       currentUserId: state.auth.userId,
//       isSignedIn: state.auth.isSignedIn
//   };
// };

export default connect()(LuckyNumber);
