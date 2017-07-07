import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ onNewGame, badGuesses, guessedLetters, wordLetters, onBadGuess, onGoodGuess }) => {
    let input;
    let gameword;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter.toLowerCase() === letter.toLowerCase());

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <Man badGuesses={badGuesses} guessedLetters={guessedLetters}/>
            <Board wordLetters={wordLetters} />
            <span>Your Guess:</span>
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange = {() => {
                    if (letterInAnswer(input.value)) {
                        onGoodGuess(input.value);
                    } else {
                        onBadGuess(input.value);
                    }
                }}
            />
            <br/>
            <span>Pick a new word:</span>
            <input type="text"
                ref = {node => {gameword = node;}}
            />
            <input type="submit"
                onClick={() => onNewGame(gameword.value)}
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
        onNewGame: (newWord) => dispatch({type: 'NEW_GAME', word: newWord}),
        onBadGuess: (inputLetter) => dispatch({type: 'BAD_GUESS', letter: inputLetter}),
        onGoodGuess: (inputLetter) => dispatch({type: 'GOOD_GUESS', letter: inputLetter})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
