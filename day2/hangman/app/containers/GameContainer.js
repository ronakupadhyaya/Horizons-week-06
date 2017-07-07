import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters, onSetNewWord }) => {
    let input;
    let input2;
    const letterInAnswer = letter => wordLetters.some(
        letterObj => letterObj.letter === letter);
    let letters = guessedLetters.join(', ');
    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <form>
                <input
                  value={''}
                  ref={node => {input2 = node;}}
                  // onChange={() => {input2.value;}}
                //   onSubmit={(e) => {e.preventDefault(); onSetNewWord(input.value);}}
                />
            <input type="submit" onClick={(e) => {e.preventDefault(); onSetNewWord(input2.value);}} />
            </form>
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => (letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuess(input.value)) }
            />
            guessedLetters: {letters}
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    guessedLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    onSetNewWord: PropTypes.func
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
        onSetNewWord: (inputLetter) => dispatch({type: 'NEW_WORD', letter: inputLetter})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
