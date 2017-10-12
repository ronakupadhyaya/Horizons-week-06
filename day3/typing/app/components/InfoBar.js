import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({ timeLeft, score }) => {
    return (<div className="red">
		Time: {timeLeft} seconds left
		Score: {score ? score : 0}
    </div>);
};

InfoBar.propTypes = {
    timeLeft: PropTypes.number,
    score: PropTypes.number
};

export default InfoBar;
