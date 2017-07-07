import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ wordLetters, onBadGuess, onGoodGuess, guessedLetters, newWord }) => {
    let input;
    let input2;
    const letterInAnswer = letter => wordLetters.some(
        letterObj => letterObj.letter === letter);

    /* the ref node thing in the code below is another way
    to handle input in React Forms */
    return (
        <div>
            <Man  />
            <Board />
            New word:
            <form>
              <input type="text"
                  ref={node => {input2 = node;}}
              />
              <input type="submit" onClick={(e) => {e.preventDefault(); newWord(input2.value); input2.value = '';}}/>
            </form>
            <input type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => letterInAnswer(input.value.toUpperCase()) ? onGoodGuess(input.value) :
                onBadGuess(input.value) }
            />
            {'Guessed Letters: ' + guessedLetters.join(', ')}
        </div>
    );
};

GameContainer.propTypes = {
    wordLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    guessedLetters: PropTypes.array,
    newWord: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBadGuess: (inputLetter) => dispatch({type: 'BAD_GUESS', letter: inputLetter}),
        onGoodGuess: (inputLetter) => dispatch({type: 'GOOD_GUESS', letter: inputLetter}),
        newWord: (inputWord) => dispatch({type: 'NEW_WORD', word: inputWord})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
