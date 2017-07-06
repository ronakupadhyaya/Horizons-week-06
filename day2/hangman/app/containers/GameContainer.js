import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import {onGoodGuess, onBadGuess, initialState} from '../actions/index';

// let inputWord = '';
const GameContainer = ({ guessedLetters, badGuesses, wordLetters, onBadGuessFunc, onGoodGuessFunc, initialStateFunc }) => {
    let input;
    let variableHoldingInputField;
    const setWord = () => {
        const passBack = variableHoldingInputField.value.split('').map(
        x => ({letter: x.toUpperCase(), guessed: false}));
        initialStateFunc(passBack);
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
                />
                <input type="submit"
                    value="SUBMIT"
                    onClick={() => setWord()}
                />
            </div>
            <div>
                <strong style={{color: 'blue'}}>{wordLetters.filter(x=>x.guessed ? false : true).length === 0 && wordLetters.length !== 0 ? 'YOU WON!!!' : ''}</strong>
            </div>
            <span>{guessedLetters}</span>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={""}
                ref={node => {input = node;}}
                onChange={() => letterInAnswer(input.value.toUpperCase()) ? onGoodGuessFunc(input.value) : onBadGuessFunc(input.value) }
            />
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    onBadGuessFunc: PropTypes.func,
    onGoodGuessFunc: PropTypes.func,
    initialStateFunc: PropTypes.func,
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
        onBadGuessFunc: (inputLetter) => {
            dispatch(onBadGuess(inputLetter));
        },
        onGoodGuessFunc: (inputLetter) => {
            dispatch(onGoodGuess(inputLetter));
        },
        initialStateFunc: (state) => {
            dispatch(initialState(state));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
