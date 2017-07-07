// commented out bad guesses because Ricky showed how to avoid
// passing bad guesses from GC to Man, and instead just getting
// bad guesses in Man.js from state directly

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import { badGuess, goodGuess, chooseWord } from '../actions/index';

const GameContainer = ({ /* badGuesses,*/ wordLetters, guessedLetters, onBadGuess, onGoodGuess, onChooseWord }) => {
    let input;
    let wordInput;
    let word = '';
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter.toUpperCase());

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <div>
                <input type="text"
                    value={word}
                    ref={node => {wordInput = node;}}
                    onChange={() => {
                        word += wordInput.value;
                    }}
                />
                <button onClick={() => onChooseWord(word)}> Submit </button>
            </div>
            <Man /* badGuesses={badGuesses} */ guessedLetters={guessedLetters} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => {
                    if (letterInAnswer(input.value)) {
                        onGoodGuess(input.value);
                    } else {
                        onBadGuess(input.value);
                    }
                }}
            />
        </div>
    );
};

GameContainer.propTypes = {
/*    badGuesses: PropTypes.number, */
    wordLetters: PropTypes.array,
    guessedLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    onChooseWord: PropTypes.func,
    chosenWord: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
/*        badGuesses: state.badGuesses, */
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBadGuess: (inputLetter) => dispatch(badGuess(inputLetter)),
        onGoodGuess: (inputLetter) => dispatch(goodGuess(inputLetter)),
        onChooseWord: (inputWord) => dispatch(chooseWord(inputWord))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
