import React from 'react';
import PropTypes from 'prop-types';


const InfoBar = ({ timer, streak, score }) => {
    return (
        <span>
          <div>Time left: {timer}</div> {' '}<div>Total score: {score}</div>{' '}
          <div>Word streak: {streak}</div>
        </span>
    );
};

InfoBar.propTypes = {
    timer: PropTypes.number,
    streak: PropTypes.number,
    score: PropTypes.number
};

export default InfoBar;
