import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import {onBadGuess, onGoodGuess, onStarting} from '../actions/index';

const GameContainer = ({ badGuesses, wordLetters, onBadGuesses, onGoodGuesses, guessedLetters, onStartingLetter}) => {
    let input;
    let variableHoldingInputField;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);
    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            Starting Word: {' '}
            <input type="text"
              ref={node => {variableHoldingInputField = node;}}
            />
            <input type="submit"
              onClick={() => onStartingLetter(variableHoldingInputField.value)}
            />
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            {guessedLetters.map((letter) => <div>{letter}</div>)}
            Guess Letters: {' '}
            <input type="text"
                ref={node => {input = node;}}
                value={input}
                onChange={() => letterInAnswer(input.value) ? onGoodGuesses(input.value) : onBadGuesses(input.value) }
            />
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuesses: PropTypes.func,
    onGoodGuesses: PropTypes.func,
    guessedLetters: PropTypes.array,
    onStartingLetter: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBadGuesses: (inputLetter) => dispatch(onBadGuess(inputLetter)),
        onGoodGuesses: (inputLetter) => dispatch(onGoodGuess(inputLetter)),
        onStartingLetter: (input) => dispatch(onStarting(input))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
