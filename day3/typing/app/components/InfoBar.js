import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({timer, score, wrong, streak}) => {
    return (
        <div>
            <div> Timer: {timer} </div>
            <div> Total Score: {score - wrong} </div>
            <div> Streak Bonus: {streak} </div>
        </div>
    );
};

InfoBar.propTypes = {
    timer: PropTypes.number,
    streak: PropTypes.number,
    wrong: PropTypes.number,
    score: PropTypes.number
};

export default InfoBar;
