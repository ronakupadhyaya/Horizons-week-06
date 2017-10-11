import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

import { badGuess, goodGuess, newWord } from '../actions/index';

const GameContainer = ({ badGuesses, wordLetters, guessedLetters, onBadGuess, onGoodGuess, onNewWord }) => {
    let input;
    let wordInput;
    const letterInAnswer = letter => wordLetters.some(
        letterObj => letterObj.letter === letter.toUpperCase());

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
          <input type="text"
              ref={node => {wordInput = node;}}
          />
          <button
            type="button"
            onClick={
              () => {
                  onNewWord(wordInput.value);
                  wordInput.value = '';
              }
            }>Start Game</button>
            <Man badGuesses={badGuesses} />
            <p>Guessed Letters: </p>
            {guessedLetters.map((letter) => letter)}
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => {
                    return letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuess(input.value);
                }
               }
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
    onNewWord: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        badGuesses: state.badGuesses,
        guessedLetters: state.guessedLetters,
        wordLetters: state.wordLetters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBadGuess: (inputLetter) => dispatch(badGuess(inputLetter)),
        onGoodGuess: (inputLetter) => dispatch(goodGuess(inputLetter)),
        onNewWord: (inputWord) => dispatch(newWord(inputWord))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
