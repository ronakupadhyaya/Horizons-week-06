import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters, onSetWord }) => {
    let input;
    const letterInAnswer = letter => wordLetters.some(
        letterObj => letterObj.letter === letter);
    let variableHoldingInputField;

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
          <input type="text"
            ref={node => {variableHoldingInputField = node;}}
          />
          <input type="submit"
            value={'Submit word'}
            onClick={() => {
                onSetWord(variableHoldingInputField.value);
            }}
          />
            <p>
              {guessedLetters.map((letter) => letter)}
            </p>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => {
                    if (letterInAnswer(input.value)) {
                        onGoodGuess(input.value);
                    } else {
                        onBadGuess(input.value);
                    }
                }
              }
            />
        </div>
    );
};

GameContainer.propTypes = {
    onGoodGuess: PropTypes.func,
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    guessedLetters: PropTypes.array,
    onSetWord: PropTypes.func
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
        onSetWord: (inputWord) => {
            dispatch({
                type: 'SET_WORD',
                word: inputWord
            });
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
