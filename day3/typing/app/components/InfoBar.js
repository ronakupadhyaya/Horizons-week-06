import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({ timer, score, streak }) => {
    return (
      <div>
      <div>Score: {score}</div>
      <div>Time Remaining: {timer} seconds</div>
      <div>Word Streak: {streak}</div>
    </div>
  );
};

InfoBar.propTypes = {
    timer: PropTypes.number,
    score: PropTypes.number,
    streak: PropTypes.number
};

export default InfoBar;
