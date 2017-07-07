import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import {serveBadGuess} from '../actions/index';
import {serveGoodGuess} from '../actions/index';
import {serveNewGame} from '../actions/index';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters, onNewGame }) => {
    let input;
    let variableHoldingInputField;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <form>
              Type your word: <input type="text"
                  ref={node => {variableHoldingInputField = node;}}
              />
              <button type="reset" onClick={() => onNewGame(variableHoldingInputField.value)}> New Game </button>
            </form>
            <Man badGuesses={badGuesses} />
            <span>
                Guessed Letters: {guessedLetters}
            </span>
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuess(input.value)}
            />
            <br/>
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    guessedLetters: PropTypes.array,
    onNewGame: PropTypes.func

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
        onBadGuess: (inputLetter) => {
            dispatch(serveBadGuess(inputLetter));
        },
        onGoodGuess: (inputLetter) => {
            dispatch(serveGoodGuess(inputLetter));
        },
        onNewGame: (inputWord) => {
            dispatch(serveNewGame(inputWord));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
