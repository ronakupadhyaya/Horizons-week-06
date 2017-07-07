import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters, onInputWord }) => {
    let input;
    let variableHoldingInputField;

    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <input type="text"
                id="text-box"
                value={''}
                ref={node => {variableHoldingInputField = node;}}
                onChange={() => {this.value = variableHoldingInputField.value;}}
            />
            <button onClick={() => onInputWord(variableHoldingInputField.value)}
>Add new word</button>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => (letterInAnswer(input.value.toUpperCase()) ? onGoodGuess(input.value.toUpperCase()) : onBadGuess(input.value.toUpperCase()))}
            />
            <div>{guessedLetters}</div>
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    guessedLetters: PropTypes.array,
    onInputWord: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBadGuess: (inputLetter) => dispatch({type: 'BAD_GUESS', letter: inputLetter}),
        onGoodGuess: (inputLetter) => dispatch({type: 'GOOD_GUESS', letter: inputLetter}),
        onInputWord: (word) => dispatch({type: 'INPUT_WORD', word: word})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
