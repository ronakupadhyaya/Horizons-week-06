import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({timer, totalScore, currentStreakBonus}) => {
    return (
      <div>
        <span>{timer}</span>
        <span>{totalScore}</span>
        <span>{currentStreakBonus}</span>
      </div>
    );
};

InfoBar.propTypes = {
    timer: PropTypes.number,
    totalScore: PropTypes.number,
    currentStreakBonus: PropTypes.number
};

export default InfoBar;
