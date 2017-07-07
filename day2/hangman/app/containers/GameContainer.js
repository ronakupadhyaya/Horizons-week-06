import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetter }) => {
    let input;

    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter.toUpperCase() === letter.toUpperCase());

    //
    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <span>GUESSED LETTER THAT'S WRONG: {guessedLetter}</span>
            <Man badGuesses={badGuesses}/>
            <Board wordLetters={wordLetters}/>
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuess(input.value) }
            />
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    guessedLetter: PropTypes.array,
    onSetInitialState: PropTypes.fun
};

const mapStateToProps = (state) => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetter: state.guessedLetter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBadGuess: (inputLetter) => dispatch({
            type: 'BAD_GUESS',
            letter: inputLetter
        }),
        onGoodGuess: (letter) => dispatch({
            type: 'GOOD_GUESS',
            letter: letter
        }),
        onSetInitialState: (letter) => dispatch({
            type: 'SET_STATE',
            letter: letter
        })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
