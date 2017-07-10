import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

import {badGuess, goodGuess, createWord} from '../actions/index';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, onCreateWord, guessedLetters }) => {
    let input;
    let input1;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <input type="text"
                ref={node => {input1 = node;}}
                onChange={() => {
                    this.input = input1.value;
                    console.log(onCreateWord);
                    // onCreateWord(input1.value);
                }
            }
            />
            <button> <a onClick= { () => this.handleSubmit()}> Make Word</a> </button>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => {
                    if(letterInAnswer(input.value)) {
                        onGoodGuess(input.value);
                    }else {
                        onBadGuess(input.value);
                    }
                }
              }
            />
            {guessedLetters.map(letter => <li> {letter} </li>)}
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    guessedLetters: PropTypes.array,
    onCreateWord: PropTypes.func
};

const mapStateToProps = (state ) => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters,
        createWord: state.createdWord
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBadGuess: (guess) => {
            dispatch(badGuess(guess));
        },
        onGoodGuess: (guess) => {
            dispatch(goodGuess(guess));
        },
        onCreateWord: (word) => {
            dispatch(createWord(word));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
