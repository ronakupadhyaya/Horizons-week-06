import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import {badGuess} from "actions"
const GameContainer = ({ badGuesses, wordLetters, onBadGuess }) => {
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
                onChange={() => if(letterInAnswer(input.value)){return onGoodGuess(input.value)}
                return onBadGuess(input.value)}}
            />
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func
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

const mapDispatchToProps = (dispatch) => {
    return {
        // onInput: (inputLetter) => alert(inputLetter)
        onBadGuess: (inputLetter) => dispatch(badGuess({type: 'BAD_GUESS', letter: inputLetter}))
        onGoodGuess: (inputLetter) => dispatch({type: 'GOOD_GUESS', letter: inputLetter})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
