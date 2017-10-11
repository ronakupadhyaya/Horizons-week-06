import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import {badGuess} from '../actions/index';
import {goodGuess} from '../actions/index';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess }) => {
    let input;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
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
    onGoodGuess: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        badGuesses: state.badGuesses,
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

const mapDispatchToProps = ( dispatch ) => {
    return {
        onBadGuess: (inputLetter) => dispatch(badGuess(inputLetter)),
        onGoodGuess: (inputLetter) => dispatch(goodGuess(inputLetter))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
