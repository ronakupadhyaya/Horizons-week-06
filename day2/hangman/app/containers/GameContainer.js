import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({
  badGuesses,
  wordLetters,
  guessedLetters,
  onBadGuess,
  onGoodGuess,
  setNewWord
}) => {
  let input;
  let newWord;
  const letterInAnswer = letter => wordLetters.some(letterObj => letterObj.letter === letter);

  /* the ref node thing in the code below is another way
  to handle input in React Forms */
  return (
    <div>
      <Man badGuesses={badGuesses}/>
      <Board wordLetters={wordLetters}/>
      <p>{guessedLetters.map(letter => (letter + ' '))}</p>
      <input type="text" value={''} ref={node => {
        input = node;
      }} onChange={() => letterInAnswer(input.value.toLowerCase())
        ? onGoodGuess(input.value.toLowerCase())
        : onBadGuess(input.value.toLowerCase())}/>
      <input type="text" value={newWord} ref={node => {
        newWord = node;
      }}/>
      <button onClick={() => {
        setNewWord(newWord.value);
        newWord.value = '';
      }}>New word</button>
    </div>
  );
};

GameContainer.propTypes = {
  badGuesses: PropTypes.number,
  wordLetters: PropTypes.array,
  guessedLetters: PropTypes.array,
  onBadGuess: PropTypes.func,
  onGoodGuess: PropTypes.func,
  setNewWord: PropTypes.func
};

const mapStateToProps = (state) => {
  return {badGuesses: state.badGuesses, wordLetters: state.wordLetters, guessedLetters: state.guessedLetters};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBadGuess: (inputLetter) => {
      dispatch({type: 'BAD_GUESS', letter: inputLetter});
    },
    onGoodGuess: (inputLetter) => {
      dispatch({type: 'GOOD_GUESS', letter: inputLetter});
    },
    setNewWord: (inputWord) => {
      dispatch({type: 'NEW_WORD', word: inputWord});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
