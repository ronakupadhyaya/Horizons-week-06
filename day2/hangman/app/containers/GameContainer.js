import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import { badGuess, goodGuess, setWord } from '../actions/index';

<<<<<<< HEAD
const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters}) => {
    let input;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);

=======
const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters, onSetWord }) => {
    let input;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);
    let newWordInput;
>>>>>>> origin/obadiar
    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <input ref={node => {newWordInput = node;}}/>
            <button onClick={() => onSetWord(newWordInput.value)}>Send</button>
            <Man badGuesses={badGuesses} />
            <div>Already guessed: {guessedLetters}</div>
            <Board wordLetters={wordLetters} />
            <div>{guessedLetters.map((letter) => {
                return letter;
            })}</div>
            <input type="text"
                value={''}
                ref={node => {input = node;}}
<<<<<<< HEAD
                onChange={() => {
                    if (letterInAnswer(input.value)) {
                        onGoodGuess(input.value);
                    } else {
                        onBadGuess(input.value);
                    }
                }}
=======
                onChange={() => letterInAnswer(input.value.toUpperCase()) ? onGoodGuess(input.value) : onBadGuess(input.value) }
>>>>>>> origin/obadiar
            />

        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
<<<<<<< HEAD
    guessedLetters: PropTypes.array
=======
    guessedLetters: PropTypes.array,
    onSetWord: PropTypes.func
>>>>>>> origin/obadiar
};

const mapStateToProps = (state) => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
<<<<<<< HEAD
        guessedLetters: state.guessedLetters
=======
        guessedLetters: state.guessedLetters,
>>>>>>> origin/obadiar
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
<<<<<<< HEAD
        onBadGuess: (inputLetter) => {
            dispatch({type: 'BAD_GUESS', letter: inputLetter});
        },

        onGoodGuess: (input) => {
            dispatch({type: 'GOOD_GUESS', letter: input});
        }
=======
        // onInput: (inputLetter) => alert(inputLetter)
        onBadGuess: (inputLetter) => dispatch(badGuess(inputLetter)),
        onGoodGuess: (inputLetter) => dispatch(goodGuess(inputLetter)),
        onSetWord: (input) => dispatch(setWord(input))
>>>>>>> origin/obadiar
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
