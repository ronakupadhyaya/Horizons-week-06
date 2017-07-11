import React from 'react';
import PropTypes from 'prop-types';
// import Box from './Box';

const InfoBar = ({ timeLeft, totalScore, streakCount }) => {
    return (
      <div className="infobar">
          <div className="score">Score: {totalScore} points</div>
          {/* <div className="timer">Time Remaining: {timeLeft || 0}</div> */}
          <div className="wordstreak">Word Streak: +{streakCount} points</div>
      </div>
  );
};

InfoBar.propTypes = {
    timeLeft: PropTypes.number,
    totalScore: PropTypes.number,
    streakCount: PropTypes.number
};

export default InfoBar;
