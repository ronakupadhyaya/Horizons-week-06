import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ onBadGuesses, badGuesses, wordLetters, onGoodGuess, guessedLetters }) => {
    let input;
    const letterInAnswer = letter => wordLetters.some(letterObj => letterObj.letter.toLowerCase() === letter.toLowerCase());

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuesses(input.value) }
            />
            <h4>Guessed letters:
              {' '}
              {guessedLetters.map(letter => (letter + ', '))}
            </h4>
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    guessedLetters: PropTypes.array,
    onBadGuesses: PropTypes.func,
    onGoodGuess: PropTypes.func
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
        onBadGuesses: (inputLetter) => (dispatch({type: 'BAD_GUESS', letter: inputLetter})),
        onGoodGuess: (inputLetter) => (dispatch({type: 'GOOD_GUESS', letter: inputLetter})),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
