import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
// import Man from '../components/Man';
import Board from '../components/Board';
// import {goodGuessesAction, badGuessesAction} from '../actions/index';

const GameContainer = ({wordLetters, onGoodGuess, onBadGuess }) => {
    let input;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
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
    goodGuesses: PropTypes.number,
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        goodGuesses: state.goodGuesses,
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      //  onBadGuess: (inputLetter) => alert(inputLetter)
        onGoodGuess: (inputLetter) => dispatch({type: 'GOOD_GUESS', inputLetter}),
        onBadGuess: (inputLetter) => dispatch({type: 'BAD_GUESS', inputLetter})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
