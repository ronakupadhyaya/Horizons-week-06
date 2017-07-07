import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ guessedLetters, badGuesses, wordLetters, onBadGuess, onGoodGuess, onWordSubmission }) => {
    let input;
    let chosenWord;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);


    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    function onChangeFn() {
        if (letterInAnswer(input.value.toUpperCase())) {
            onGoodGuess(input.value.toUpperCase());
        } else {
            onBadGuess(input.value.toUpperCase());
        }
    }

    return (
        <div>
            <input type="text" ref={node => {
                chosenWord = node;
            }}/>
            <input type="submit" value="submit" onClick={(e) => {
                e.preventDefault();
                onWordSubmission(chosenWord.value);
            }}/>

            <p>Guessed Letters: {guessedLetters}</p>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={onChangeFn}
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
    onWordSubmission: PropTypes.func,
};

const mapStateToProps = state => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters
    };
};

const mapDispatchToProps = dispatch => (
    {
        onBadGuess: (inputLetter) => {
            dispatch({type: 'BAD_GUESS', letter: inputLetter});
        },
        onGoodGuess: (inputLetter) => {
            dispatch({type: 'GOOD_GUESS', letter: inputLetter});
        },
        onWordSubmission: (inputWord) => {
            dispatch({type: 'WORD_SUBMISSION', word: inputWord});
        }
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
