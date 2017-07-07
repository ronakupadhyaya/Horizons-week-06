import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
// import goodGuess from '../actions/index';
// import badGuess from '../actions/index';

const GameContainer = ({ wordLetters, onBadGuess, onGoodGuess, guessedLetters, onNewWord}) => {
    let input;
    let input2;
    const letterInAnswer = letter => wordLetters.some(
            letterObj => letterObj.letter === letter);
    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <Man/>
            <Board wordLetters={wordLetters} />
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuess(input.value)}
            />
            <input type = "text"
                placeholder = "insert word here!"
                ref={node => {input2 = node;}}
            />
            <button onClick =
                {() => {
                    const array = input2.value.split('');
                    const newArr = [];
                    array.forEach((letter) => newArr.push({
                        letter: letter,
                        guessed: false
                    }));
                    onNewWord(newArr);
                }
                }
                > Submit </button>
            <ul>
                {guessedLetters.map((letter) => <li> {letter} </li>)}
            </ul>
        </div>
    );
};

GameContainer.propTypes = {
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    guessedLetters: PropTypes.array,
    onNewWord: PropTypes.func
};

const mapStateToProps = ( state ) => {
    return {
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters
    };
};

const badGuess = (inputLetter) => {
    return {
        type: 'BAD_GUESS',
        letter: inputLetter
    };
};

const goodGuess = (inputLetter) => {
    return {
        type: 'GOOD_GUESS',
        letter: inputLetter
    };
};

const secretWord = (inputWord) => {
    return {
        type: 'SECRET_WORD',
        word: inputWord
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onBadGuess: (inputLetter) => dispatch(badGuess(inputLetter)),
        onGoodGuess: (inputLetter) => dispatch(goodGuess(inputLetter)),
        onNewWord: (inputWord) => dispatch(secretWord(inputWord))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
