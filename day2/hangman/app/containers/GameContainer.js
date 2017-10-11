import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import { badGuess } from '../actions/index';
import { goodGuess } from '../actions/index';
import { newGame } from '../actions/index';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters, createNewGame }) => {
    let input;
    let wordInput;
    const letterInAnswer = letter => wordLetters.some(
        letterObj => letterObj.letter === letter);
    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <div>
              <input type="text" ref={node => {wordInput = node;}}/>
              <button onClick={() => createNewGame(wordInput.value)}>Submit</button>
            </div>
            {guessedLetters.map((letter) => <span>{letter}, </span>)}
            <Man badGuesses={badGuesses} />
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
    createNewGame: PropTypes.func,
    guessedLetters: PropTypes.string
};

const mapStateToProps = state => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onBadGuess: (letter) => {
            dispatch(badGuess(letter));
        },
        onGoodGuess: (letter) => {
            dispatch(goodGuess(letter));
        },
        createNewGame: (word) => {
            dispatch(newGame(word));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
