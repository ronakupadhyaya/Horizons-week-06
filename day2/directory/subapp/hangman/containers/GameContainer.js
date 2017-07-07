import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import * as actions from '../actions/index';

const GameContainer = ({ badGuesses, wordLetters, handleNewWord, newWord, submitNewWord, guessedLetters, onBadGuess, onGoodGuess }) => {
    let input;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter.toUpperCase() === letter.toUpperCase());

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <div>
                <input
                    value={newWord}
                    onChange={element => handleNewWord(element.target.value)}
                />
                <button
                    onClick={() => submitNewWord(newWord)}
                >
                    New Word
                </button>
            </div>
            <br></br>
            <div> Guessed Letters: {guessedLetters} </div>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuess(input.value, guessedLetters) }
            />
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    guessedLetters: PropTypes.array,
    newWord: PropTypes.string,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    handleNewWord: PropTypes.func,
    submitNewWord: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters,
        newWord: state.newWord
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        onBadGuess: (inputLetter, guessedLetters) => dispatch(actions.BAD_GUESS(inputLetter, guessedLetters)),
        onGoodGuess: inputLetter => dispatch(actions.GOOD_GUESS(inputLetter)),
        handleNewWord: word => dispatch(actions.NEW_WORD(word)),
        submitNewWord: word => dispatch(actions.SUBMIT_NEW_WORD(word))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
