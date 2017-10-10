import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, allGuesses, setNewWord}) => {
  let input;
  let wordInput;
  const letterInAnswer = letter => wordLetters.some(
    letterObj => letterObj.letter.toLowerCase() === letter.toLowerCase());
  /* the ref node thing in the code below is another way
  to handle input in React Forms */
  return (
    <div>
      <input type="text"
        key="WordBox"
        value={wordInput}
        ref={node => {wordInput = node;}}
      />
      <button onClick={()=>{setNewWord(wordInput.value); wordInput.value = '';}}>Submit Word</button>
      <Man badGuesses={badGuesses} />
      <Board wordLetters={wordLetters} />
      <input type="text"
        key="GuessBox"
        value={''}
        ref={node => {input = node;}}
        onChange={() => (letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuess(input.value)) }
      />
      <p>Letters Guessed:</p>
      <p>{allGuesses.map((letter)=>(letter + ' '))}</p>
    </div>
  );
};

GameContainer.propTypes = {
  badGuesses: PropTypes.number,
  wordLetters: PropTypes.array,
  allGuesses: PropTypes.array,
  onBadGuess: PropTypes.func,
  onGoodGuess: PropTypes.func,
  setNewWord: PropTypes.func
};

const mapStateToProps = ( state ) => {
  return {
    badGuesses: state.badGuesses,
    wordLetters: state.wordLetters,
    allGuesses: state.allGuesses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBadGuess: (inputLetter) => {
      dispatch({
        type: 'BAD_GUESS',
        letter: inputLetter
      });
    },
    onGoodGuess: (inputLetter) => {
      dispatch({
        type: 'GOOD_GUESS',
        letter: inputLetter
      });
    },
    setNewWord: (newWord) => {
      dispatch({
        type: 'NEW_WORD',
        newWord: newWord
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
