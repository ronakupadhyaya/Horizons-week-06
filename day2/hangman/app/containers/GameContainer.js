import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters, inputBox, setInput, start }) => {
    let input = '';
    const letterInAnswer = letter => {
        const letter2 = letter.toUpperCase();
        for (let i = 0; i < wordLetters.length; i++) {
            if (wordLetters[i].letter === letter2) {
                return true;
            }
        }
        return false;
    };


    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <Man badGuesses={badGuesses} />
            <h3 style={{display: 'inline'}}>Guessed Letters: </h3>
            {guessedLetters.map((letter, index) => <p style={{display: 'inline'}} key={index}>{letter} </p>)}
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={inputBox}
                ref={node => {input = node;}}
                onChange={(evt) => {
                    setInput(evt.target.value);
                }
              }
            />
            <button onClick={() => {
                if (inputBox === 'start') {
                    start();
                } else if (letterInAnswer(inputBox)) {
                    onGoodGuess(inputBox);
                } else {
                    onBadGuess(inputBox);
                }
            }}>Go</button>
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    guessedLetters: PropTypes.array,
    setInput: PropTypes.func,
    inputBox: PropTypes.string,
    start: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters,
        inputBox: state.inputBox
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBadGuess: (inputLetter) => dispatch({type: 'BAD_GUESS', letter: inputLetter}),
        onGoodGuess: (inputLetter) => dispatch({type: 'GOOD_GUESS', letter: inputLetter}),
        setInput: (inputBox) => dispatch({type: 'INPUT', input: inputBox}),
        start: () => dispatch({type: 'START'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
