import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import { badGuess, goodGuess, setWord } from '../actions/index';


const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters, setTheWord}) => {
    let input;
    let variableHoldingInputField;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
          <form>
            <input type="text"
                ref={node => {variableHoldingInputField = node;}} />
            <button type="reset" onClick={() => setTheWord(variableHoldingInputField.value)}>Set Word</button>
          </form>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => letterInAnswer(input.value.toUpperCase()) ?
                  onGoodGuess(input.value.toUpperCase()) : onBadGuess(input.value.toUpperCase())}
            />
            <ul> You typed:
              {
               guessedLetters.map(letter =>
                   <li>{letter}</li>
               )
            }
          </ul>
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onInput: PropTypes.func,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    guessedLetters: PropTypes.array,
    setTheWord: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onBadGuess: (inputLetter) => {
            dispatch(badGuess(inputLetter));
        },
        onGoodGuess: (inputLetter) => {
            dispatch(goodGuess(inputLetter));
        },
        setTheWord: (secretWord) => {
            dispatch(setWord(secretWord));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
// GameContainer becomes a container after connecting.
