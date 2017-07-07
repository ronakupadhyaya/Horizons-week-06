import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ badGuesses, wordLetters, guessedLetters, onBadGuess, onGoodGuess, onNewGame }) => {
    let input;
    let newWord;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter.toUpperCase() === letter.toUpperCase());

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                style={{'margin': '10px 0px'}}
                onChange={() => letterInAnswer(input.value) ? onGoodGuess(input.value.toUpperCase()) : onBadGuess(input.value)}
            /><br />
            <b>Guessed letters: </b>
            {guessedLetters.map((letter) => <b>{letter.toUpperCase()}</b>)}<br />
            <input type="text" ref={node => {newWord = node;}} />
            <button onClick={() => {onNewGame(newWord.value); newWord.value = '';}}>New Game</button>
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    guessedLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    onNewGame: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBadGuess: (inputLetter) => dispatch({
            type: 'BAD_GUESS',
            letter: inputLetter
        }),
        onGoodGuess: (inputLetter) => dispatch({
            type: 'GOOD_GUESS',
            letter: inputLetter
        }),
        onNewGame: (newWord) => dispatch({
            type: 'NEW_GAME',
            newWord: newWord
        })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
