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
      // <div className="h-100 pa7 center w-100 bg-light-gray"></div>
      <div className="aspect-ratio--object pa7 bg-light-gray tc system-serif f-headline">

          Hello, {firstName} {lastName}!
        <div className="pv5">
          Your lucky number is
        </div>
        <div className="pv4">
          { luckyNumber }
        </div>
      </div>
    );
  }
}

// TODO: Add PropTypes
LuckyNumberDisplay.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  luckyNumber: PropTypes.number
};

export default LuckyNumberDisplay;
