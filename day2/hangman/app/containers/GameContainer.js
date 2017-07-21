import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import { onBadGuessClick } from '../actions/types';
import { onGoodGuessClick } from '../actions/types';


const GameContainer = ({ badGuesses, wordLetters, guessedLetters, onBadGuess, onGoodGuess }) => {
    let input;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);
    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <div>Guessed Letters: {guessedLetters}</div>
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => letterInAnswer(input.value.toUpperCase()) ?
                    onGoodGuess(input.value) :
                    onBadGuess(input.value)}
            />
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    guessedLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func
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
        onBadGuess: (inputLetter) => dispatch(onBadGuessClick(inputLetter)),
        onGoodGuess: (inputLetter) => dispatch(onGoodGuessClick(inputLetter))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
