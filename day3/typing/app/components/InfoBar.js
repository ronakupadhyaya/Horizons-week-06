import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({ timer }) => {
    return (
      <div>
        <div className="info">Time Remaining: {timer}</div>
        <div className="info">Word Streak: </div>
        <div className="info">Score: 0</div>
      </div>
    );
};

InfoBar.propTypes = {
    timer: PropTypes.number,
};


export default InfoBar;
