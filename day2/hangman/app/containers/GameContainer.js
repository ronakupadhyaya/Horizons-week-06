import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import { badGuess } from '../actions/index';
import { goodGuess } from '../actions/index';
import { chosenWord } from '../actions/index';


const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters, setInitialState }) => {
    let variableHoldingInputField;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);
    let input;
    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text" placeholder="Hangman Word"
               ref={node => {variableHoldingInputField = node;}}
             />
             <button onClick={() => setInitialState(variableHoldingInputField.value)}>Submit</button>
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => {
                    console.log(input.value);
                    return letterInAnswer(input.value.toUpperCase()) ? onGoodGuess(input.value.toUpperCase()) : onBadGuess(input.value.toUpperCase());
                }}
            />
            <h2>Guessed Letters : {guessedLetters} </h2>
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    guessedLetters: PropTypes.array,
    setInitialState: PropTypes.func
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
        onBadGuess: (inputLetter) => {
            dispatch(badGuess(inputLetter));
        },
        onGoodGuess: (inputLetter) => {
            dispatch(goodGuess(inputLetter));
        },
        setInitialState: (inputWord) => {
            dispatch(chosenWord(inputWord));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
