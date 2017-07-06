import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import {badGuess, goodGuess, setWord} from '../actions/index';
const GameContainer = ({ badGuesses, wordLetters, onSetWord, guessedLetters, onBadGuess, onGoodGuess }) => {
    let input;
    const letterInAnswer = letter => wordLetters.some(
      letterObj => letterObj.letter === letter);
    let variableHoldingInputField;

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <br/>
            <b>Set the word to be guessed:</b>
            <br/>
            <input type="text"
              ref={node => {variableHoldingInputField = node;}}
            />
            <input
              type="submit"
              onClick={()=>{
                  onSetWord(variableHoldingInputField.value.toUpperCase());
                  variableHoldingInputField.value = '';
              }}
            />
            <br/>
            <br/>
            Guessed Letters: {guessedLetters.map(letter => <b>{letter + ' '}</b>)}
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => (letterInAnswer(input.value.toUpperCase())) ?
                  onGoodGuess(input.value.toUpperCase()) :
                  onBadGuess(input.value.toUpperCase())}
            />
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    guessedLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
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
        onBadGuess: (inputLetter)=>dispatch(badGuess(inputLetter)),
        onGoodGuess: (inputLetter)=>dispatch(goodGuess(inputLetter)),
        onSetWord: (word)=>dispatch(setWord(word))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
