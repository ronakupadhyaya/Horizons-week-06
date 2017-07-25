import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PlayGameButton = ({playAgain}) =>
    <button className="btn btn-success" onClick={() => playAgain()} style={{margin: '3%'}}>Play Again</button>;

PlayGameButton.propTypes = {
    playAgain: PropTypes.func
};

export default PlayGameButton;
