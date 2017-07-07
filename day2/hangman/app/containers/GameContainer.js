import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { onBadGuess, onGoodGuess, onNewGame } from '../actions/index';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ wordLetters, guessedLetters, withBadGuess, withGoodGuess, withNewGame }) => {
    let input = 0;
    const letterInAnswer = (letter) => (wordLetters.letters.some(
       (letterObj) => (letterObj.letter === letter)));
    const letterGuessedAlready = (letter) => (guessedLetters.some(
        (guessedLetter) => (guessedLetter === letter)
    ));
    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <button onClick={withNewGame}>New Game</button>
            {wordLetters.won ?
                (<div>
                    <h1>Your word: <strong>{wordLetters.letters.reduce((a, b) => (a + b.letter), '')}</strong></h1>
                    <h2>{wordLetters.definition}</h2>
                </div>) :
                (<div>
                    <Man />
                    <span>
                      {guessedLetters.map((letter, index) => <button key={'guesses' + index}>{letter}</button>)}
                    </span>
                    <Board wordLetters={wordLetters.letters} />
                    <input type="text"
                      value={''}
                      ref={(node) => {
                          input = node;
                      }}
                      onChange={() => {
                          if(letterGuessedAlready(input.value.toUpperCase())) ;
                          else {
                              letterInAnswer(input.value.toUpperCase()) ?
                              withGoodGuess(input.value.toUpperCase()) :
                              withBadGuess(input.value.toUpperCase());
                          }
                      }}
                    />
                </div>)
            }
        </div>
    );
};

GameContainer.propTypes = {
    wordLetters: PropTypes.object,
    guessedLetters: PropTypes.array,
    withBadGuess: PropTypes.func,
    withGoodGuess: PropTypes.func,
    withNewGame: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        withNewGame: () => dispatch(onNewGame()),
        withBadGuess: inputLetter => dispatch(onBadGuess(inputLetter)),
        withGoodGuess: inputLetter => dispatch(onGoodGuess(inputLetter))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
