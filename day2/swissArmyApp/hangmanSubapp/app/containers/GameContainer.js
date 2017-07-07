import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import SetWord from '../components/SetWord';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters, setWord }) => {
    let input;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);

    const helper = (value) => {
        if (letterInAnswer(value)) {
            onGoodGuess(value);
        } else {
            onBadGuess(value);
        }
    };

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            GUESSES:
            {
              guessedLetters.map((letter) => {
                  return <span> {letter} </span>;
              })
            }
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <h3>Your Guess:</h3>
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => helper(input.value)}
            />
            <h3>Word to Guess:</h3>
            <SetWord setWord={(word) => setWord(word)}/>
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    guessedLetters: PropTypes.array,
    setWord: PropTypes.func
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
        onBadGuess: (inputLetter) => {
            dispatch({
                type: 'BAD_GUESS',
                letter: inputLetter
            });
        },
        onGoodGuess: (inputLetter) => {
            dispatch({
                type: 'GOOD_GUESS',
                letter: inputLetter
            });
        },
        setWord: (word) => {
            dispatch({
                type: 'WORD_CHOSEN',
                word: word
            });
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
