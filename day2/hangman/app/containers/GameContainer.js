import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import { badGuess } from '../actions/index';
import { goodGuess } from '../actions/index';
import { newWord } from '../actions/index';

const GameContainer = ({ badGuesses, wordLetters, guessedLetters, onBadGuess, onGoodGuess, onNewWord, }) => {
  let input;
  let word;
  const letterInAnswer = letter => wordLetters.some(
    letterObj => letterObj.letter.toLowerCase() === letter.toLowerCase()
  );

  /* the ref node thing in the code below is another way
  to handle input in React Forms */

  return (
    <div>
      <input type="text"
        value={word}
        ref={node => {word = node;}}
        onKeyPress={(e) => (e.charCode === 13 ? onNewWord(word.value) : null)}
        placeholder={'new word'}
      />
      <Man badGuesses={badGuesses} />
      <Board wordLetters={wordLetters} />
      <div>
        Guessed Letters: {guessedLetters.map( (item) => (' ' + item + ' ') )}
      </div>
      <input type="text"
        value={''}
        ref={node => {input = node;}}
        onChange={() => letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuess(input.value)}
        placeholder={'choose a letter'}
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
  onNewWord: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    badGuesses: state.badGuesses,
    wordLetters: state.wordLetters,
    guessedLetters: state.guessedLetters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBadGuess: (inputLetter) => dispatch(badGuess(inputLetter)),
    onGoodGuess: (inputLetter) => dispatch(goodGuess(inputLetter)),
    onNewWord: (word) => dispatch(newWord(word)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
