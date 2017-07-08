import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({ timer, score, streak }) => {
    return (
      <div>
          <p>Time Remaining: {timer} Score: {score} Word Streak: {streak}</p>
      </div>
    );
};

InfoBar.propTypes = {
    timer: PropTypes.number,
    score: PropTypes.number,
    streak: PropTypes.number
};


export default InfoBar;
