import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters, onNewGame }) => {
    let input;
    let newItem;
    const letterInAnswer = letter => wordLetters.some(
        letterObj => letterObj.letter === letter);
        /* the ref node thing in the code below is another way
        to handle input in React Forms */
    return (
            <div>
                <Man badGuesses={badGuesses} />
                <Board wordLetters={wordLetters} />
                <input type="text"
                    value={''}
                    ref={node => {input = node;}}
                    onChange={() => {
                        if (letterInAnswer(input.value)) {
                            onGoodGuess(input.value);
                        }   else {
                            onBadGuess(input.value);
                        }
                    }}
                /><br/>
                {guessedLetters}<br/>
                <input type="text"
                        ref={node => {newItem = node;}}
                        onChange={() => {
                            newItem.value;
                        }}
                    />
                    <button onClick={() => onNewGame(newItem.value)}> New Game!</button>
            </div>
        );
};
GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    guessedLetters: PropTypes.array,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
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
        onBadGuess: (inputLetter) => dispatch({type: 'BAD_GUESS', letter: inputLetter}),
        onGoodGuess: (inputLetter) => dispatch({type: 'GOOD_GUESS', letter: inputLetter}),
        onNewGame: (inputWord) => dispatch({type: 'NEW_GAME', word: inputWord})
    };
};

export default (connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer));
