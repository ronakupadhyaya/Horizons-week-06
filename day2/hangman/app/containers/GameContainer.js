import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters, wordChosen}) => {
    let input;
    let variableHoldingInputField;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);
    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <ul>
              {guessedLetters.map((item) => <li>{item}</li>)}
            </ul>
            <div>
            Choose your word
            <input type="text"
              ref={node => {variableHoldingInputField = node;}}
            />
            <input type="submit"   onClick={() => {
                return wordChosen( variableHoldingInputField.value);
            }}/>
            </div>
            <div>
              your guess word
              <input type="text"
                value={''}ul
                ref={node => {input = node;}}
                onChange={() => {
                    if(letterInAnswer( input.value)) {
                        return onGoodGuess( input.value);
                    }
                    return onBadGuess( input.value);
                }}
              />
            </div>
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    guessedLetters: PropTypes.array,
    wordChosen: PropTypes.String
};

const mapStateToProps = (state) => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters
    };
};

const mapDispatchToProps = (dispatch ) => {
    return {
        onBadGuess: (inputLetter)=> dispatch({
            type: 'BAD_GUESS',
            letter: inputLetter
        }),
        onGoodGuess: (inputLetter)=> dispatch({
            type: 'GOOD_GUESS',
            letter: inputLetter
        }),
        wordChosen: (wordChosen) => dispatch({
            type: 'CHOSEN',
            wordChosen: wordChosen
        })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
