import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

import {badGuess, goodGuess} from '../actions/index.js';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters}) => {
    let input;
    // let newWord;
    // console.log(newWord);
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuess(input.value)}
            />
            <h3>GUESSED</h3>
            {guessedLetters.map((letter) => <div>{letter}</div>)}
              {/* <input
                  type="text"
                  value={''}
                  ref={node => {newWord = node;}}
              />
              <button value="NEW GAME"></button> */}
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    guessedLetters: PropTypes.array
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
        onBadGuess: (inputLetter) =>
          dispatch(badGuess(inputLetter)),
        onGoodGuess: (inputLetter) =>
          dispatch(goodGuess(inputLetter))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
