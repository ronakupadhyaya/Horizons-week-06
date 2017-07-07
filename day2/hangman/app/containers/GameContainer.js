import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ badGuesses, wordLetters, guessedLetters, onBadGuess, onGoodGuess }) => {
    let input;
    let variableHoldingInputField;
    let tempWord = '';
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);

    const handleSubmit = () => {
        this.state.wordLetters = tempWord.split('');
        tempWord = '';
    };

    const handleTyping = (word) => {
        console.log(tempWord);
        tempWord += word;
    };

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <div>
                Guessed Letters: {guessedLetters.map((letter)=> ' ' + letter)}
            </div>
            <div>
                <input type="text"
                    value={''}
                    ref={node => {input = node;}}
                    onChange={() => letterInAnswer(input.value) ? onGoodGuess(input.value) :        onBadGuess(input.value)}
                />
            </div>
            <input type="text"
                value={tempWord}
                ref={node => {variableHoldingInputField = node;}}
                onChange={() => handleTyping(variableHoldingInputField.value)}
            />
            <button type="button" onClick={() => handleSubmit()}>Submit Word</button>
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    guessedLetters: PropTypes.array,
    onGoodGuess: PropTypes.func,
    onBadGuess: PropTypes.func
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
        onBadGuess: (letter) => dispatch({type: 'BAD_GUESS', letter}),
        onGoodGuess: (letter) => dispatch({type: 'GOOD_GUESS', letter})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
