import React from 'react';
import PropTypes from 'prop-types';
// import Box from './Box';

const InfoBar = ({ time, totalScore, currentStreak }) => {
    return (
      <div className="infobar">
          <div className="score">Score: {totalScore || 0}</div>
          <div className="timer">Time Remaining: {time || 0}</div>
          <div className="wordstreak">Word Streak: {currentStreak || 0}</div>
      </div>
  );
};

InfoBar.propTypes = {
    time: PropTypes.number,
    totalScore: PropTypes.number,
    currentStreak: PropTypes.number
};

export default InfoBar;
