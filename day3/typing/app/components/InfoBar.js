import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({timeLeft, totalScore, streakCount}) => {
    return (
        <div>
            Time: {timeLeft} Score: {totalScore} Word Streak: {streakCount[0]}
        </div>
    );
};

InfoBar.propTypes = {
    timeLeft: PropTypes.number,
    totalScore: PropTypes.number,
    streakCount: PropTypes.array
};

export default InfoBar;
