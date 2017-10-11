import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import { createResetAction, createInputAction } from '../actions/index';

const GameContainer = ({ onReset, wordList, currentIndex, inputHandler, userInput }) => {
    // onInput(input)
    let input;
    return (
        <div>
            <button type="button" onClick={() => onReset()}>Restart Game!</button>
            <WordBox wordList={wordList} />
            <input type="text" value={userInput} ref={node => { input = node; }} onChange={() => inputHandler(input.value.substr(-1), wordList, currentIndex)} />
        </div>
    );
};

GameContainer.propTypes = {
    wordList: PropTypes.array,
    currentIndex: PropTypes.array,
    onReset: PropTypes.func,
    inputHandler: PropTypes.func,
    userInput: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
        wordList: state.wordList,
        currentIndex: state.currentIndex,
        userInput: state.userInput
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
        onReset: () => {
            dispatch(createResetAction());
        },
        inputHandler: (letter, wordList, currentIndex) => {
            dispatch(createInputAction(letter, wordList, currentIndex));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
