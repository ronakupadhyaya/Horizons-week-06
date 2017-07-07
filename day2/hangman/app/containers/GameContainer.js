import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
<<<<<<< HEAD
import {badGuess} from "actions"
const GameContainer = ({ badGuesses, wordLetters, onBadGuess }) => {
    let input;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);
=======

const GameContainer = ({ badGuesses, wordLetters, onInput }) => {
    let input;
    // const letterInAnswer = letter => wordLetters.some(
    //    letterObj => letterObj.letter === letter);
>>>>>>> 442651ce66adbdb2ac1a491b5a808af3d8ab4e8a

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
<<<<<<< HEAD
                onChange={() => if(letterInAnswer(input.value)){return onGoodGuess(input.value)}
                return onBadGuess(input.value)}}
=======
                onChange={() => onInput(input.value) }
>>>>>>> 442651ce66adbdb2ac1a491b5a808af3d8ab4e8a
            />
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
<<<<<<< HEAD
    onBadGuess: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        badGuesses: state.badGuesses,
=======
    onInput: PropTypes.func
};

const mapStateToProps = (/* state */) => {
    return {
        badGuesses: 0,
>>>>>>> 442651ce66adbdb2ac1a491b5a808af3d8ab4e8a
        wordLetters: [
            {letter: 'H', guessed: true},
            {letter: 'O', guessed: false},
            {letter: 'R', guessed: false},
            {letter: 'I', guessed: false},
            {letter: 'Z', guessed: true},
            {letter: 'O', guessed: false},
            {letter: 'N', guessed: true},
            {letter: 'S', guessed: false}
        ]
    };
};

<<<<<<< HEAD
const mapDispatchToProps = (dispatch) => {
    return {
        // onInput: (inputLetter) => alert(inputLetter)
        onBadGuess: (inputLetter) => dispatch(badGuess({type: 'BAD_GUESS', letter: inputLetter}))
        onGoodGuess: (inputLetter) => dispatch({type: 'GOOD_GUESS', letter: inputLetter})
=======
const mapDispatchToProps = (/* dispatch */) => {
    return {
        onInput: (inputLetter) => alert(inputLetter)
>>>>>>> 442651ce66adbdb2ac1a491b5a808af3d8ab4e8a
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
