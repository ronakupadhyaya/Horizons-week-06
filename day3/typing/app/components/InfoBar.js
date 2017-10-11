import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({timeLeft, score, startGame, streak}) => {
    return(
      <div>
        <p>Time left: {timeLeft}</p>
        <p> Score: {score} </p>
        <p> Streak: {streak} </p>
        <button onClick={() => {startGame();}}> Start Game </button>
      </div>
    );
};

InfoBar.propTypes = {
    timeLeft: PropTypes.number,
    score: PropTypes.number,
    startGame: PropTypes.func,
    streak: PropTypes.number
};

export default InfoBar;
