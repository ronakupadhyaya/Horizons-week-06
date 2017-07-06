import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

// let inputWord = '';
const GameContainer = ({ guessedLetters, badGuesses, wordLetters, onBadGuess, onGoodGuess, initialState }) => {
    let input;
    let variableHoldingInputField;
    const setWord = () => {
        const passBack = variableHoldingInputField.value.split('').map(
        x => ({letter: x.toUpperCase(), guessed: false}));
        initialState(passBack);
    };
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);
    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <div>
                <strong>Input the customized word</strong>
                <input type="text"
                    ref={node => {variableHoldingInputField = node;}}
                    // o nChange={() => updateWord(variableHoldingInputField.value)}
                />
                <input type="submit"
                    value="SUBMIT"
                    onClick={() => setWord()}
                />
            </div>

            <span>{guessedLetters}</span>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={""}
                ref={node => {input = node;}}
                onChange={() => letterInAnswer(input.value.toUpperCase()) ? onGoodGuess(input.value) : onBadGuess(input.value) }
            />
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    initialState: PropTypes.func,
    wordLetters: PropTypes.array,
    guessedLetters: PropTypes.array
};

const mapStateToProps = state => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onBadGuess: (inputLetter) => {
            dispatch({ type: 'BAD_GUESS', letter: inputLetter, initialState: inputLetter });
        },
        onGoodGuess: (inputLetter) => {
            dispatch({ type: 'GOOD_GUESS', letter: inputLetter });
        },
        initialState: (initialState) => {
            dispatch({ type: 'INITIAL_STATE', initialState: initialState });
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
