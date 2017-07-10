import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({ timer, totalScore }) => {
    const style = {
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    };
    return (
      <div style={style}>
        <div className="info">Time Remaining: {timer}</div>
        <div className="info">Word Streak: </div>
        <div className="info">Score: {totalScore}</div>
      </div>
    );
};

InfoBar.propTypes = {
    timer: PropTypes.number,
    totalScore: PropTypes.number,
};


export default InfoBar;
