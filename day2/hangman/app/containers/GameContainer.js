import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters }) => {
    let input;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <Man badGuesses={badGuesses} guessedLetters={guessedLetters}/>
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => letterInAnswer(input.value.toUpperCase()) ? onGoodGuess(input.value.toUpperCase()) : onBadGuess(input.value.toUpperCase())}
            />
            {let variableHoldingInputField}
            <input type="text"
                placeholder={'New Word Here'}
                ref={node => {variableHoldingInputField = node;}}
                // onChange={() => letterInAnswer(input.value.toUpperCase()) ? onGoodGuess(input.value.toUpperCase()) : onBadGuess(input.value.toUpperCase())}
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

const mapStateToProps = ( state ) => {
    return {
        badGuesses: state.badGuesses,
        guessedLetters: state.guessedLetters,
        wordLetters: state.wordLetters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBadGuess: (inputLetter) => dispatch({type: 'BAD_GUESS', letter: inputLetter}),
        onGoodGuess: (inputLetter) => dispatch({type: 'GOOD_GUESS', letter: inputLetter})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
