import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters, createNewWord }) => {
    let input;
    const letterInAnswer = letter => wordLetters.some(letterObj => letterObj.letter === letter);

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    let variableHoldingInputField;
    return (
        <div>
          <div>
           <input type="text"
                 placeholder="Enter new word"
                 ref={node => {variableHoldingInputField = node;}}
           />
           <button onClick={(event) => {event.preventDefault(); createNewWord(variableHoldingInputField.value);}}> Submit </button>
           </div>
            <Man badGuesses={badGuesses} />
            <div>
              Guessed Letters: {guessedLetters.map(letter => <span> {letter}</span>)}
            </div>
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => {
                    if(letterInAnswer(input.value)) {
                        onGoodGuess(input.value);
                    } else{
                        onBadGuess(input.value);
                    }
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
    createNewWord: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters,
        newWord: state.newWord
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBadGuess: (inputLetter) => dispatch({type: 'BAD_GUESS', letter: inputLetter}),
        onGoodGuess: (inputLetter) => dispatch({type: 'GOOD_GUESS', letter: inputLetter}),
        createNewWord: (inputWord) => dispatch({type: 'CREATE_WORD', word: inputWord})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
