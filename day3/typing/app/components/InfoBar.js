import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({ timer, score, streak }) => {
    return (
    <div>
      <div> time: {timer} </div>
      <div> score: {score} </div>
      <div> steak: {streak} </div>
    </div>
  );
};

InfoBar.propTypes = {
    timer: PropTypes.number,
    score: PropTypes.number,
    streak: PropTypes.number
};

export default InfoBar;
