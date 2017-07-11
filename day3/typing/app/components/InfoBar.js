import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({ timer, score, streak }) => {
    return(
      <div>
        <span>Timer: {timer / 1000} Seconds</span>&nbsp;&nbsp;<span>Score: {score}</span>&nbsp;&nbsp;<span>Streak: +{streak}</span>
      </div>
    );
};


InfoBar.propTypes = {
    timer: PropTypes.number,
    score: PropTypes.number,
    streak: PropTypes.number
};

export default InfoBar;
