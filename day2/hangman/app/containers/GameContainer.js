import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({badGuesses, wordLetters, guessedLetters, onBadGuess, onGoodGuess, addNewWord}) => {
    let input;
    const letterInAnswer = (letter) => wordLetters.some(
       (letterObj) => letterObj.letter === letter);
    let variableHoldingInputField;

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <span>{'Guessed letters: ' + guessedLetters}</span> <br/>
            <input type="text"
                value={''}
                ref={(node) => {input = node;}}
                onChange={() => {letterInAnswer(input.value.toUpperCase()) ? onGoodGuess(input.value.toUpperCase()) : onBadGuess(input.value.toUpperCase());} }
            />
            <div>
                <input type="text"
                    ref={(node) => {variableHoldingInputField = node;}}
                />
                <button type="button"
                    onClick={() => {
                        addNewWord(variableHoldingInputField.value);
                        variableHoldingInputField.value = '';
                    }}>
                    Submit New Word
                </button>
            </div>
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    guessedLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    addNewWord: PropTypes.func,
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
        // onInput: (inputLetter) => alert(inputLetter)
        onBadGuess: (inputLetter) => dispatch({
            type: 'BAD_GUESS',
            letter: inputLetter,
        }),
        onGoodGuess: (inputLetter) => dispatch({
            type: 'GOOD_GUESS',
            letter: inputLetter,
        }),
        addNewWord: (newWord) => dispatch({
            type: 'NEW_WORD',
            word: newWord,
        })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
