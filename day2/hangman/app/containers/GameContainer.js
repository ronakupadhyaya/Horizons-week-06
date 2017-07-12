import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';
import { serveBadGuess, serveGoodGuess, serveNewGame } from '../actions/index';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters, onNewGame }) => {
    let input;

    const letterInAnswer = letter => wordLetters.letters.some(
       letterObj => letterObj.letter === letter);
    return (
        <div>
            <form>
              <div>
                <button type="reset" onClick={() => {
                    onNewGame('english');
                }}> New Game(English) </button>
                <button type="reset" onClick={() => {
                    onNewGame('spanish');
                }}> New Game(Spanish) </button>
                <button type="reset" onClick={() => {
                    onNewGame('korean');
                }}> New Game(Korean) </button>
                <button type="reset" onClick={() => {
                    onNewGame('mandarin');
                }}> New Game(Mandarin) </button> <br/>
              </div>
              Hint: {!wordLetters.word ? '' : 'Starts with ' + wordLetters.word[0] + ', Ends with ' + wordLetters.word[wordLetters.word.length - 1] }<br/>
            </form>
            {wordLetters.word ?
            <div>
              <h2>
                Definitions: {wordLetters.word ? wordLetters.definition : ''}
              </h2>
              <Man badGuesses={badGuesses} />
              <span>
                  Guessed Letters: {guessedLetters}
              </span>
              <Board  />
              <input type="text"
                  value={''}
                  ref={node => {input = node;}}
                  onChange={() => letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuess(input.value)}
              />
              <br/>
            </div> : false}
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.object,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    guessedLetters: PropTypes.array,
    onNewGame: PropTypes.func
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBadGuess: (inputLetter) => {
            dispatch(serveBadGuess(inputLetter));
        },
        onGoodGuess: (inputLetter) => {
            dispatch(serveGoodGuess(inputLetter));
        },
        onNewGame: (inputWord) => {
            dispatch(serveNewGame(inputWord));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
