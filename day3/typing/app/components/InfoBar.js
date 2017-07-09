import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({ timeLeft, score }) => {
    return (
    <div className="main">
      <p id="infostuff">Time Remaining: {timeLeft}s | Score: {score}</p>
    </div>
  );
};

InfoBar.propTypes = {
    timeLeft: PropTypes.number,
    score: PropTypes.number
};

export default InfoBar;
