import PropTypes from 'prop-types';
import React from 'react';
import {
    connect
} from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({
    badGuesses,
    wordLetters,
    onBadGuess,
    onGoodGuess,
    guessedLetters
}) => {
    let input;
    let variableHoldingInputField;
    const letterInAnswer = letter => wordLetters.some(
        letterObj => letterObj.letter === letter);

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return ( < div >
        <
        Man badGuesses = {
            badGuesses
        }
        /> <
        Board wordLetters = {
            wordLetters
        }
        /> <
        input type = "text"
        value = {
            ''
        }
        ref = {
            node => {
                input = node;
            }
        }
        onChange = {
            () => letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuess(input.value)
        }
        /> <
        div > Guessed Letters: {
            guessedLetters
        } < /div>
        <input type = "text" value = {''}
          ref={node => {variableHoldingInputField = node;}}
        />
        // anywhere you like, such as in a click handler:
        variableHoldingInputField.value // -> is the typed text

        <
        /
        div >

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
        badGuesses: state.badGuesses, // why is this .badGuessesReducer
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBadGuess: (inputLetter) => dispatch({
            type: 'BAD_GUESS',
            inputLetter
        }),
        onGoodGuess: (inputLetter) => dispatch({
            type: 'GOOD_GUESS',
            inputLetter
        })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
