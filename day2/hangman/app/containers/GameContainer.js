import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters, onGivenWord}) => {
    // const word = prompt('Enter a word to begin play.');
    // onGivenWord(word);
    let input;
    let word;
    const letterInAnswer = letter => {
        return wordLetters.some(
       letterObj =>  letterObj.letter.toLowerCase() === letter);
    };
    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
          <input type="text"
              value={word}
              ref={node => {word = node;}}
          />
          <input type="submit"
              value="Submit word"
              onClick={() => {
                  onGivenWord([...word.value]);
                  word.value = '';
              }}
            />
            <Man badGuesses={badGuesses} />
            <div> Guessed Letters: {guessedLetters.map(letter => letter.toUpperCase() + '     ')} </div>
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={input}
                ref={node => {input = node;}}
                onChange={() => {
                    letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuess(input.value);
                }}
            />
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    guessedLetters: PropTypes.array,
    onGivenWord: PropTypes.func
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
        onGivenWord: (inputWordArr) => dispatch({
            type: 'WORD_GIVEN',
            wordArr: inputWordArr
        })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
