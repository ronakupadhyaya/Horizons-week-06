import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import {onBadGuess} from '../actions/index.js';
import {onGoodGuess} from '../actions/index.js';
import {onNewWord} from '../actions/index.js';

const GameContainer = ({
    badGuesses,
    wordLetters,
    onBadGuessClick,
    onGoodGuessClick,
    guessedLetters,
    newWord
}) => {
    let input;
    const letterInAnswer = letter => wordLetters.some(letterObj => letterObj.letter === letter);

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    let str = ' ';
    guessedLetters.forEach((item) => {
        str += ' ' + item;
    });
    let variableHoldingInputField;
    return (
        <div>
            <Man badGuesses={badGuesses}/>
            <Board wordLetters={wordLetters}/>
            <input type="text" value={''} ref={node => {
                input = node;
            }} onChange={() => letterInAnswer(input.value)
                ? onGoodGuessClick(input.value)
                : onBadGuessClick(input.value)}/>
            <div>
                letter guessed {str}

            </div>
            <input type="text" placeholder="enter word" ref={node => {
                variableHoldingInputField = node;
            }}/>
            <button onClick={() => newWord(variableHoldingInputField.value.split(''))}>

                New word</button>
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuessClick: PropTypes.func,
    onGoodGuessClick: PropTypes.func,
    guessedLetters: PropTypes.array,
    newWord: PropTypes.func
};

const mapStateToProps = (state) => {
    return {badGuesses: state.badGuesses, wordLetters: state.wordLetters, guessedLetters: state.guessedLetters};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBadGuessClick: (inputLetter) => {
            dispatch(onBadGuess(inputLetter));
        },
        onGoodGuessClick: (inputLetter) => {
            dispatch(onGoodGuess(inputLetter));
        },
        newWord: (inputLetter) => {
            dispatch(onNewWord(inputLetter));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
