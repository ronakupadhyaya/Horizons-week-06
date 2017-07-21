import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import {badGuess, goodGuess, newWord} from '../actions/index';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters, onSubmitWord }) => {
    let input;
    let variableholdingInputField = '';
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <input type="text"
                value={variableholdingInputField.value}
                ref={node => {variableholdingInputField = node;}}
            />
            <button onClick={() => {
                const word = variableholdingInputField.value;
                variableholdingInputField.value = '';
                return onSubmitWord(word.toUpperCase());
            }}>Submit</button>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => (letterInAnswer(input.value.toUpperCase())) ? onGoodGuess(input.value.toUpperCase()) : onBadGuess(input.value.toUpperCase()) }
            />
            <ul>
              {guessedLetters.map(letter => (<li>{letter}</li>))}
            </ul>
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    guessedLetters: PropTypes.array,
    onSubmitWord: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onBadGuess: (inputLetter) => dispatch(badGuess(inputLetter)),
        onGoodGuess: (inputLetter) => dispatch(goodGuess(inputLetter)),
        onSubmitWord: (inputWord) => dispatch(newWord(inputWord))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
