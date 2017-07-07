import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import { badGuess, goodGuess } from '../actions/index';

const GameContainer = ({ badGuesses, guessedLetters, wordLetters, onBadGuess, onGoodGuess }) => {
    let input;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter.toUpperCase());

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
                <Man badGuesses={badGuesses} guessedLetters={guessedLetters} />
                <Board wordLetters={wordLetters} />
                <input type="text"
                        value={''}
                        ref={node => {input = node;}}
                        onChange={() => {
                            if (letterInAnswer(input.value)) {
                                onGoodGuess(input.value);
                            } else {
                                onBadGuess(input.value);
                            }
                        }
                    }
            />
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    guessedLetters: PropTypes.array
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
        onBadGuess: (inputLetter) => dispatch(badGuess(inputLetter)),
        onGoodGuess: (inputLetter) => dispatch(goodGuess(inputLetter))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
