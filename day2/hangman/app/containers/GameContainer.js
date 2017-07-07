import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessArray, onCreateGame }) => {
    let input;
    let variableInput;
      const letterInAnswer = letter => wordLetters.some(
    letterObj => letterObj.letter === letter);
    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
      <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            onCreateGame(variableInput.value);
            variableInput.value = '';
        }}>
        Input Word:
        <input type="text"
          placeholder = "Word Here"
          ref={node => {variableInput = node;}}
        />
        <input type="submit" />
      </form>
  <ul> Guessed Letters: {guessArray.map((letter) => <li>{letter}</li>)}</ul>
  <Man badGuesses={badGuesses} />
  <Board wordLetters={wordLetters} />
  <input type="text"
    value={''}
    ref={node => {input = node;}}
    onChange={() => {
        letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuess(input.value);
    }
  }
/>
</div>
);
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    guessArray: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    onCreateGame: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessArray: state.guessArray,
    };
};

const onBadGuess = (inputLetter) =>
({
    type: 'BAD_GUESS',
    letter: inputLetter
});

const onGoodGuess = (inputLetter) =>
({
    type: 'GOOD_GUESS',
    letter: inputLetter
});

const onCreateGame = (inputWord) =>
({
    type: 'START_GAME',
    word: inputWord
});

const mapDispatchToProps = dispatch => {
    return {
        onBadGuess: (inputLetter) => {
            dispatch(onBadGuess(inputLetter));
        },
        onGoodGuess: (inputLetter) => {
            dispatch(onGoodGuess(inputLetter));
        },
        onCreateGame: (inputWord) => {
            dispatch(onCreateGame(inputWord));
        }
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
