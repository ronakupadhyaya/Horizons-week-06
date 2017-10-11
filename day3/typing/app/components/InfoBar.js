import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({timeLeft, score, startGame}) => {
    return(
      <div>
        <p>Time left: {timeLeft}</p>
        <p> Score: {score} </p>
        <button onClick={() => {startGame();}}> Start Game </button>
      </div>
    );
};

InfoBar.propTypes = {
    timeLeft: PropTypes.number,
    score: PropTypes.number,
    startGame: PropTypes.func
};

export default InfoBar;
