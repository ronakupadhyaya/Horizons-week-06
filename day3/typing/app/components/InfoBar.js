import React from 'react';
import PropTypes from 'prop-types';
// timer, totalScore, streakBonus
const InfoBar = ({timer}) => {
    return (
        <div>
          <span>Time Remaining {timer} </span>
          <span>Total Score 0 </span>
          <span>Word Streak 0 </span>
        </div>
    );
};

InfoBar.propTypes = {
    timer: PropTypes.number,
    // totalScore: PropTypes.number,
    // streakBonus: PropTypes.number
};

export default InfoBar;
