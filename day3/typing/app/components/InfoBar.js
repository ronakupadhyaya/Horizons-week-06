import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({timeLeft, score, wordStreak}) => {
    return (
        <div>
            Time: {timeLeft} Score: {score} Word Streak: {wordStreak}
        </div>
    );
};

InfoBar.propTypes = {
    timeLeft: PropTypes.number,
    score: PropTypes.number,
    wordStreak: PropTypes.number
};

export default InfoBar;
