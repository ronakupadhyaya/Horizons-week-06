import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import { serveBadGuess } from '../actions/index';
import { serveGoodGuess } from '../actions/index';
import { serveNewWord } from '../actions/index';

const GameContainer = ({ badGuesses, wordLetters, guessedLetters, onBadGuess, onGoodGuess, submitNewWord }) => {
    let input;
    let variableHoldingInputField;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <Man badGuesses={badGuesses} />

            <span>Submit New Word</span>
            <input type="text"
              ref={node => {variableHoldingInputField = node;}}
              onChange={() => submitNewWord(variableHoldingInputField.value.toUpperCase())}
            />
            <br/>

            <span> Guessed Letters: {guessedLetters} </span>
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => letterInAnswer(input.value.toUpperCase()) ? onGoodGuess(input.value.toUpperCase()) : onBadGuess(input.value.toUpperCase()) }
            />

        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    guessedLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    submitNewWord: PropTypes.func
};

const mapStateToProps = ( state ) => {
    return {
        badGuesses: state.badGuesses, // this is what provider lets you do, otherwise you would have to run the reducer file to get the inital state
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        onBadGuess: (inputLetter) => {
            dispatch(serveBadGuess(inputLetter));
        },
        onGoodGuess: (inputLetter) => {
            dispatch(serveGoodGuess(inputLetter));
        },
        submitNewWord: (inputLetter) => {
            dispatch(serveNewWord(inputLetter));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
