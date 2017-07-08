import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import { badGuess, goodGuess, newGame } from '../actions/index';

const GameContainer = ({ badGuesses, wordLetters, guessedLetters, onBadGuess, onGoodGuess, onNewGame }) => {
    let input;
    const letterInAnswer = letter => wordLetters.some(
        letterObj => letterObj.letter === letter);

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    let variableHoldingInputField;
    return (
        <div>
            <input type="text"
                ref={node => { variableHoldingInputField = node; }}
            />
            <button onClick={() => onNewGame(variableHoldingInputField.value)} >Submit</button>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => { input = node; }}
                onChange={() => letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuess(input.value)}
            />
            <br />
            <p>Guesses:</p>
            {guessedLetters.map(l => <span>{l} </span>)}
            <br />
            <br />
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    guessedLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    onNewGame: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters
    };
};

const mapDispatchToProps = (dispatch) => ({
    onBadGuess: (inputLetter) => dispatch(badGuess(inputLetter)),
    onGoodGuess: (inputLetter) => dispatch(goodGuess(inputLetter)),
    onNewGame: (word) => dispatch(newGame(word))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
