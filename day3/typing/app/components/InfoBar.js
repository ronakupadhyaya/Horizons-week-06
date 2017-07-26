import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = (props) => {
    return (
        <div className="infoBar">
            <p>Score: 000</p>
            <p>Time Remaining: {props.timer} seconds</p>
            <p>Word Streak: +0</p>
        </div>
    );
};

InfoBar.propTypes = {
    timer: PropTypes.number
};

export default InfoBar;
