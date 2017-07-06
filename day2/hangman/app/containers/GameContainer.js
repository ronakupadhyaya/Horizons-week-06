import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ started, badGuesses, wordLetters, onBadGuess, onGoodGuess, onSetAnswer, guessedLetters }) => {
    let input;
    let newWord;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);
    if (!started) {
        return (
          <div>
            <input type="text"
                val={''}
                placeholder="Enter a word"
                ref={node => {newWord = node;}}
            />
            <button type="submit" onClick={() => onSetAnswer(newWord.value)}>Submit</button>
          </div>
        );
    }
    return (
      <div>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => (letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuess(input.value)) }
            />
            <p className="guessedLetters">Guessed letters: {guessedLetters}</p>
        </div>
    );
};

GameContainer.propTypes = {
    started: PropTypes.boolean,
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    onSetAnswer: PropTypes.func,
    guessedLetters: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        started: state.started,
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBadGuess: (inputLetter) => dispatch({type: 'BAD_GUESS', letter: inputLetter}),
        onGoodGuess: (inputLetter) => dispatch({type: 'GOOD_GUESS', letter: inputLetter}),
        onSetAnswer: (inputWord) => dispatch({type: 'SET_ANSWER', word: inputWord})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
