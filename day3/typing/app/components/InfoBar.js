import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({time, score, wordStreak}) => {
    return (
        <div>
            Time: {time} Score: {score} Word Streak: {wordStreak}
        </div>
    );
};

InfoBar.propTypes = {
    time: PropTypes.number,
    score: PropTypes.number,
    wordStreak: PropTypes.number
};

export default InfoBar;
