import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

import { onBadGuess } from '../actions/types.js';
import { onGoodGuess } from '../actions/types.js';
import { resetGame } from '../actions/types.js';

const GameContainer = ({ badGuesses, wordLetters, addBadGuess, addGoodGuess, guessedLetters, reset }) => {
    let input;
    let word;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);

    /* the ref node thing in the code below is another way
    to handle input in React Forms */

    function handleChange(val) {
        if(letterInAnswer(val) === true) {
            addGoodGuess(val);
        } else {
            addBadGuess(val);
        }
    }

    // function handle(pass) {
    //     word = pass;
    // }

    return (
        <div>
            <input type="text"
                value={word}
                ref={node => {word = node;}}
                // onChange={() => handle(word.value)}
            />
            <button onClick={() => reset(word)}>Start New Game!</button>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} guesses={guessedLetters} />
            <input type="text"
                // value={input}
                ref={node => {input = node;}}
                onChange={() => handleChange(input.value) }
            />
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    guessedLetters: PropTypes.array,
    addBadGuess: PropTypes.func,
    addGoodGuess: PropTypes.func,
    reset: PropTypes.func
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
        addBadGuess: (inputLetter) => {
            dispatch(onBadGuess(inputLetter));
        },
        addGoodGuess: (inputLetter) => {
            dispatch(onGoodGuess(inputLetter));
        },
        reset: (word) => {
            dispatch(resetGame(word));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
