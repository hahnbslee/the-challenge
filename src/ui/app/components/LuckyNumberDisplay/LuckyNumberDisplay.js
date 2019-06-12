/**
 * LuckyNumberDisplay.js
 *
 * This component displays the user's full name and their lucky number!
 * Its props are passed down from the LuckyNumber container.
 */

import React from 'react';
import PropTypes from 'prop-types';

class LuckyNumberDisplay extends React.PureComponent {
  render() {
    console.log('luckyNumberDisplay', this.props);
    // TODO: Receive props passed down from LuckyNumber container
    const { firstName, lastName, luckyNumber } = this.props;

    return (
      <div className="mt5 pa4 center w-25 bg-light-gray">
        Hello, {firstName} {lastName}!
        <br />
        Your lucky number is { luckyNumber }
      </div>
    );
  }
}

// TODO: Add PropTypes
LuckyNumberDisplay.propTypes = {
  userName: PropTypes.any, // temporary fix
  luckyNumber: PropTypes.number
};

export default LuckyNumberDisplay;
