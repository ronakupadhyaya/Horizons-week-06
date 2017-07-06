import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters }) => {
    let input;
    const letterInAnswer = letter => wordLetters.some(
        letterObj => letterObj.letter.toUpperCase() === letter.toUpperCase());

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <div>Guessed Letters: {typeof guessedLetters}</div>
            <div>Guessed Letters: {guessedLetters}</div>
            <div>{guessedLetters.forEach((e) => <span>{e}</span>)}</div>
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuess(input.value)}
            />
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    guessedLetters: PropTypes.array,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func
};

const mapStateToProps = ( state ) => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBadGuess: (inputLetter) => dispatch({type: 'BAD_GUESS', letter: inputLetter}),
        onGoodGuess: (inputLetter) => dispatch({type: 'GOOD_GUESS', letter: inputLetter})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
