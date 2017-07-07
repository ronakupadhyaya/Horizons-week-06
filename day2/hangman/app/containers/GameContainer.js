import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters, onGameWord}) => {
    let input;
    const letterInAnswer = letter => wordLetters.some(
       letterObj => letterObj.letter === letter);
    let gameWord = {value: 'horizons'};
    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <h4>Start the game with: </h4>
            <input type="text"
                ref={node => {gameWord = node;}}
            />
            <button onClick={()=>{onGameWord(gameWord.value); gameWord.value = '';}}>Set Word</button>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} /> <br/>
            <input type="text"
                ref={node => {input = node;}}
                placeholder="You guesses here..."
                onChange={() => {
                    if (letterInAnswer(input.value)) {
                        onGoodGuess(input.value);
                    } else {
                        onBadGuess(input.value);
                    }
                    input.value = '';
                }}
            />
            <h4>You already guessed the following letters:&nbsp;
            {guessedLetters.map(letter=><strong>{letter + ' '}</strong>)} </h4>
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    guessedLetters: PropTypes.array,
    onGameWord: PropTypes.func
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
        onBadGuess: (inputLetter)=>{
            dispatch({type: 'BAD_GUESS', letter: inputLetter});
        },
        onGoodGuess: (inputLetter)=>{
            dispatch({type: 'GOOD_GUESS', letter: inputLetter});
        },
        onGameWord: (word)=>{
            dispatch({type: 'INPUT_WORD', word});
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
