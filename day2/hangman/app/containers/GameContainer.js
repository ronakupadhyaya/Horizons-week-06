import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ badGuesses, wordLetters, guessedLetters, onBadGuess, onGoodGuess, newWord }) => {
    let input;
    let variableHoldingInputField;
    const letterInAnswer = (letter) => (
        wordLetters.some(letterObj => letterObj.letter === letter)
    );
    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    /* no type="submit" because don't want to refresh page */
    return (
        <div>
            <input type="text"
                placeholder="New word, new game!"
                value={''}
                ref={node => {variableHoldingInputField = node;}}
            />
            <input type="submit"
                value="submit"
                onClick={() => newWord(variableHoldingInputField.value)}
            />
            <Man badGuesses={badGuesses} />
            <p>Guessed letters: {guessedLetters.join(', ')}</p>
            <Board wordLetters={wordLetters} />
            <input type="text"
                placeholder="Guess a letter"
                value={''}
                ref={node => {input = node;}}
                onChange={() => letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuess(input.value)}
            />
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    guessedLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    newWord: PropTypes.func
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
            dispatch({type: 'BAD_GUESS', letter: inputLetter});
        },
        onGoodGuess: (inputLetter) => {
            dispatch({type: 'GOOD_GUESS', letter: inputLetter});
        },
        newWord: (inputWord) => {
            dispatch({type: 'NEW_GAME', word: inputWord});
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
