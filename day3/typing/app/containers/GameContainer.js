import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import GameOverContainer from './GameOverContainer';
import { createResetAction, createInputAction, createTimerAction } from '../actions/index';

const GameContainer = ({ onReset, wordList, currentIndex, inputHandler, userInput, timeLeft, score, gameOver }) => {
    let input;
    return (
        <div>
            {gameOver ?
                <GameOverContainer score={score} onClick={() => onReset()} /> :
                <div>
                    <button type="button" onClick={() => onReset()}>Restart Game!</button>
                    <br /> <span> {timeLeft[0]}</span>
                    <WordBox wordList={wordList} />
                    <input type="text" value={userInput} ref={node => { input = node; }} onChange={() => inputHandler(input.value.substr(-1), wordList, currentIndex, timeLeft)} />
                    <span>Score: {score}</span>
                </div>
            }
        </div>
    );
};

GameContainer.propTypes = {
    wordList: PropTypes.array,
    currentIndex: PropTypes.array,
    onReset: PropTypes.func,
    inputHandler: PropTypes.func,
    userInput: PropTypes.string,
    timeLeft: PropTypes.array,
    score: PropTypes.number,
    gameOver: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
        wordList: state.wordList,
        currentIndex: state.currentIndex,
        userInput: state.userInput,
        timeLeft: state.timeLeft,
        score: state.score,
        gameOver: state.gameOver
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
        onReset: () => {
            dispatch(createResetAction());
        },
        inputHandler: (letter, wordList, currentIndex, timeLeft) => {
            dispatch(createInputAction(letter, wordList, currentIndex));
            if (!timeLeft[1]) {
                let counter = timeLeft[0];
                const tempId = setInterval(() => dispatch(createTimerAction('decrement', null, counter--)), 1000);
                dispatch(createTimerAction('startTimer', tempId));
            }
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
