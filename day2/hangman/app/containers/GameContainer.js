import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import { onBadGuessAction, onGoodGuessAction, changeWordAction } from '../actions/index';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters, changeWord }) => {
    let input;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter.toUpperCase());

    let wordInput;
    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <input type="text"
                value={''}
                ref={node => {wordInput = node;}}
                value={wordInput}
            />
            <button onClick={() => changeWord(wordInput.value)}>Set Word</button>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => {
                    if (letterInAnswer(input.value.toUpperCase())) {
                        onGoodGuess(input.value.toUpperCase());
                    } else {
                        onBadGuess(input.value.toUpperCase());
                    }
                } }
            />
            <p>{guessedLetters}</p>
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    guessedLetters: PropTypes.array,
    changeWord: PropTypes.func
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
        onBadGuess: (letter) => dispatch(onBadGuessAction(letter)),
        onGoodGuess: (letter) => dispatch(onGoodGuessAction(letter)),
        changeWord: (word) => dispatch(changeWordAction(word))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
