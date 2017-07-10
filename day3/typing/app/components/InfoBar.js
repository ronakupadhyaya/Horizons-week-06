import React from 'react';
import PropTypes from 'prop-types';

//TextBox is gonna be our input box
const InfoBar = () => {
    return (
      <div>
        <h5>Time Remaining: 0 seconds</h5>
        <h5>Score: 0</h5>
        <h5>Word Streak: +0</h5>
      </div>
  );
};

// InfoBar.propTypes = {
//     stepNumber: PropTypes.string
// };

export default InfoBar;
