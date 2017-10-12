import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import GameOverContainer from './GameOverContainer';
import { createResetAction, createInputAction, createTimerAction } from '../actions/index';

const GameContainer = ({ onReset, wordList, currentIndex, inputHandler, userInput, timeLeft, score, gameOver }) => {
    let input;
    return (
        <div id="root-container">
            {gameOver ?
                <GameOverContainer score={score} onClick={() => onReset()} /> :
                <div id="game-container">
                  <WordBox wordList={wordList} />
                  <div className="footer">
                    <div id="timer"> Seconds: {timeLeft[0]}</div>
                    <input type="text" value={userInput} ref={node => { input = node; }} onChange={() => inputHandler(input.value.substr(-1), wordList, currentIndex, timeLeft)} />
                    <button id="reset-button" type="button" onClick={() => onReset()}>Reset</button>
                    <div id="score">Score: <span className={score < 0 ? 'negative' : 'positive'}>{score}</span></div> </div> </div>
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
