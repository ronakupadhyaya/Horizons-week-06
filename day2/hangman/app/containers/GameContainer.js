import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ word, badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters, setInitial}) => {
    // let chosenWord;
    if (wordLetters.length < 1) {
        setInitial(word);
    }
    console.log('myword', word);
    let input;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);
    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <div>GUESSED LETTERS: {guessedLetters.map((letter)=><span> {letter} </span>)}</div>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => (letterInAnswer(input.value.toUpperCase()) ? onGoodGuess(input.value.toUpperCase()) : onBadGuess(input.value.toUpperCase()))}
            />
        </div>
    );
};

GameContainer.propTypes = {
    match: PropTypes.shape,
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    guessedLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    setInitial: PropTypes.func,
    onGoodGuess: PropTypes.func,
    word: PropTypes.string
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
        onBadGuess: (inputLetter) => dispatch({type: 'BAD_GUESS', inputLetter}),
        onGoodGuess: (inputLetter) => dispatch({type: 'GOOD_GUESS', inputLetter}),
        setInitial: (inputLetter) => dispatch({type: 'SET_INITIAL', inputLetter})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
