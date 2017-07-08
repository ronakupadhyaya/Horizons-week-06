import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({ timer, streak, score }) => {
    return (
        <div className="infobar">
            <p>Timer: {timer}</p>
            <p>Score: {score}</p>
            <p>Word Streak: +{streak}</p>
        </div>
    );
};

InfoBar.propTypes = {
    timer: PropTypes.number,
    streak: PropTypes.number,
    score: PropTypes.number
};

export default InfoBar;
