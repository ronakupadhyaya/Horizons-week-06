import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters }) => {
    let input;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);

    const changeHandler = (letter) => {
        const l = letter.toUpperCase();
        letterInAnswer(l) ? onGoodGuess(l) : onBadGuess(l);
    };
    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <Man badGuesses={badGuesses} guessedLetters={guessedLetters} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => changeHandler(input.value)}
                style={{margin: '5px'}}
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

const mapStateToProps = (state) => ({
    badGuesses: state.badGuesses,
    wordLetters: state.wordLetters,
    guessedLetters: state.guessedLetters
});

const mapDispatchToProps = (dispatch) => ({
    onBadGuess: (letter) => dispatch({type: 'BAD_GUESS', letter}),
    onGoodGuess: (letter) => dispatch({type: 'GOOD_GUESS', letter})
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
