import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
// import { addTodo, toggleTodo, removeTodo, filterTodo } from '../actions/index.js';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters }) => {
    let input;
    // let gameWordInputField;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            {/* <input type="text"
                value={gameWordInputField ? gameWordInputField.value : ''}
                ref={node => {gameWordInputField = node;}}
            /> */}
            {/* gameWordInputField.value */}
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => {
                    const guess = input.value.toUpperCase();
                    return letterInAnswer(guess) ? onGoodGuess(guess) : onBadGuess(guess);
                }
                }
            />
            <div>Guessed Letters: {guessedLetters}</div>
            {/* <div className="guesses">{guessedLetters.map( (letter) => {letter + ' '})}</div> */}
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    guessedLetters: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters
        // [
        //     {letter: 'H', guessed: true},
        //     {letter: 'O', guessed: false},
        //     {letter: 'R', guessed: false},
        //     {letter: 'I', guessed: false},
        //     {letter: 'Z', guessed: true},
        //     {letter: 'O', guessed: false},
        //     {letter: 'N', guessed: true},
        //     {letter: 'S', guessed: false}
        // ]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBadGuess: (inputLetter) => {
            dispatch({type: 'BAD_GUESS', letter: inputLetter});
        },
        onGoodGuess: (inputLetter) => {
            dispatch({type: 'GOOD_GUESS', letter: inputLetter});
        }

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
