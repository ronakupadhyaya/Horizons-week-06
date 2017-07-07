import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ badGuesses, wordLetters, guessedLetters, onBadGuess, onGoodGuess, onNewWord }) => {
    let input;
    let wordInput;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <h4>Set a new word</h4>
            <input type="text"
                ref={node => {wordInput = node;}}
            />
            <button onClick={() => onNewWord(wordInput.value)}>Submit</button>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => (letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuess(input.value)) }
            />
            <h4>Guessed Letters</h4>
            <ul>
                {guessedLetters.map((letter) => <li>{letter}</li>)}
            </ul>
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    guessedLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    onNewWord: PropTypes.func
};

const mapStateToProps = ( state ) => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        onBadGuess: (inputLetter) => dispatch({type: 'BAD_GUESS', letter: inputLetter}),
        onGoodGuess: (inputLetter) => dispatch({type: 'GOOD_GUESS', letter: inputLetter}),
        onNewWord: (inputWord) => dispatch({type: 'NEW_WORD', word: inputWord})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
