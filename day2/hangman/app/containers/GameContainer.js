import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ badGuesses, wordLetters, onBadGuess, onGoodGuess, guessedLetters, newGame }) => {
    let input;
    let newWord;
    const letterInAnswer = letter => wordLetters.some(
      letterObj => letterObj.letter === letter);

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <p>
            Guessed Letters: {guessedLetters.map((letter)=><span>{letter}, </span>)}
            </p>
            <div>
              <p>GUESS LETTER HERE:</p>
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => {
                    if(letterInAnswer(input.value)) {
                        onGoodGuess(input.value);
                    } else {
                        onBadGuess(input.value);
                    }
                }
                }
            />
          </div>
            <div>
              <p> START NEW GAME: </p>
            <input type="text"
                ref={node=> {newWord = node;}}
              />
              <input type="submit" value="Start" onClick={()=>newGame(newWord.value)}/>
            </div>
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    guessedLetters: PropTypes.array,
    newGame: PropTypes.func
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
        onBadGuess: (inputLetter)=> dispatch({type: 'BAD_GUESS', letter: inputLetter}),
        onGoodGuess: (inputLetter)=> dispatch({type: 'GOOD_GUESS', letter: inputLetter}),
        newGame: (inputWord) => dispatch({type: 'NEW_GAME', word: inputWord})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
