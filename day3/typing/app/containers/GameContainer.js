import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import { createResetAction, createInputAction, createTimerAction } from '../actions/index';

const GameContainer = ({ onReset, wordList, currentIndex, inputHandler, userInput, timeLeft, score }) => {
    // onInput(input)
    let input;
    return (
        <div>
            <button type="button" onClick={() => onReset()}>Restart Game!</button>
            <br /><span> {timeLeft[0]}</span>
            <WordBox wordList={wordList} />
            <input type="text" value={userInput} ref={node => { input = node; }} onChange={() => inputHandler(input.value.substr(-1), wordList, currentIndex, timeLeft)} />
            <span>Score: {score}</span>
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
    score: PropTypes.number
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
        wordList: state.wordList,
        currentIndex: state.currentIndex,
        userInput: state.userInput,
        timeLeft: state.timeLeft,
        score: state.score
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
                const tempId = setInterval(() => dispatch(createTimerAction('decrement')), 1000);
                dispatch(createTimerAction('startTimer', tempId));
            }
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
