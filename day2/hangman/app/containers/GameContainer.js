import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import {badGuess, goodGuess, newGame} from '../actions/index';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters, onNewGame }) => {
    let input;
    let newWord;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter.toLowerCase() === letter.toLowerCase());

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
          <input type="text"
              // value={''}
              placeholder = "Enter new Word"
              ref={node => {newWord = node;}}
              onChange={() =>{newWord.value;}}
          />
          <button onClick={() => onNewGame(newWord.value)}> New Game</button>
            <Man badGuesses={badGuesses}  guessedLetters={guessedLetters}/>
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuess(input.value) }
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
    onNewGame: PropTypes.string
};

const mapStateToProps = ( state ) => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters,
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        onBadGuess: (inputLetter) => dispatch(badGuess(inputLetter)),
        onGoodGuess: (inputLetter) => dispatch(goodGuess(inputLetter)),
        onNewGame: (word) => dispatch(newGame(word))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
