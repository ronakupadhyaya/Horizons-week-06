import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
// import { addTodo, toggleTodo, removeTodo, filterTodo } from '../actions/index.js';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters, gameStarted, onWordSet }) => {
    let input;
    let gameWordInputField;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);

    return (
        <div>
            {gameStarted ? (
                <div>
                    <Man badGuesses={badGuesses} />
                    <Board wordLetters={wordLetters} />
                    <input type="text"
                        value={''}
                        ref={node => {input = node;}}
                        onChange={() => {
                            const guess = input.value.toUpperCase();
                            console.log('game started', gameStarted);
                            return letterInAnswer(guess) ? onGoodGuess(guess) : onBadGuess(guess);
                        }
                        }
                    />
                    <div>Guessed Letters: {guessedLetters}</div>
                </div>
            ) : (
                <div>
                    <p>Choose a word and press enter to play! </p>
                    <input type="text"
                        ref={node => {gameWordInputField = node;}}
                        onChange={() => {
                            console.log(gameWordInputField.value);
                            // gameWordInputField.value += gameWordInputField.value;
                        }}
                        onKeyPress={(event) => {
                            // console.log(gameWordInputField.value);
                            if(event.charCode === 13) {
                                const word = gameWordInputField.value.toUpperCase();
                                // gameWordInputField.value = '';
                                console.log('pressed enter:word is', word);
                                return onWordSet(word);
                            }
                            return null;
                        }
                        }
                    />
                </div>
            )}


            {/* <div className="guesses">{guessedLetters.map( (letter) => {letter + ' '})}</div> */}
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    guessedLetters: PropTypes.array,
    onWordSet: PropTypes.func,
    gameStarted: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters,
        gameStarted: state.gameStarted
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBadGuess: (inputLetter) => {
            dispatch({type: 'BAD_GUESS', letter: inputLetter});
        },
        onGoodGuess: (inputLetter) => {
            dispatch({type: 'GOOD_GUESS', letter: inputLetter});
        },
        onWordSet: (gameWord) => {
            dispatch({type: 'WORD_SET', word: gameWord});
        }

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
