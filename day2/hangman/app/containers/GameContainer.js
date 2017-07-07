import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ badGuesses, wordLetters, guessedLetters, onBadGuess, onGoodGuess, onNewGame }) => {
    let input;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);
    const handleGuess = (inputLetter) => {
        if (letterInAnswer(inputLetter)) {
            return onGoodGuess(inputLetter);
        }
        return onBadGuess(inputLetter);
    };
    let variableHoldingInputField;
    return (
        <div>
            <form>
                <input
                    type="text"
                    ref={node => {variableHoldingInputField = node;}}
                />
                <button type="reset" onClick={() => onNewGame(variableHoldingInputField.value)}>
                  New Game
                </button>
            </form>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => handleGuess(input.value)}
            />
            <div>
                <font>
                    Guessed Letters: {guessedLetters}
                </font>
            </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        onBadGuess: (inputLetter) => dispatch({
            type: 'BAD_GUESS',
            letter: inputLetter
        }),
        onGoodGuess: (inputLetter) => dispatch({
            type: 'GOOD_GUESS',
            letter: inputLetter
        }),
        onNewGame: (inputWord) => {
            if (inputWord.length > 0) {
                return dispatch({
                    type: 'NEW_GAME',
                    word: inputWord
                });
            }
            return null;
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
