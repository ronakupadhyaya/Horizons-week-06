import PropTypes from 'prop-types';
import React from 'react';
// import { connect } from 'react-redux';
// import { createResetAction, createInputAction, createTimerAction } from '../actions/index';

class GameOverContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let score = this.props.score;
        return (
            <div id="game-over-container">
                <h1>Time's Up!</h1>
                <span> Score: {score} </span>
                <button type="button" onClick={this.props.onClick}>Restart Game!</button>
            </div>
        );
    }
}

GameOverContainer.propTypes = {
    score: PropTypes.number,
    onClick: PropTypes.func
};

export default GameOverContainer;
