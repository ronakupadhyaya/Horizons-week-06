/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

import * as types from '../actions/types';

const initialState = {
    badGuesses: 0,
    wordLetters: [
        {letter: 'H', guessed: true},
        {letter: 'O', guessed: false},
        {letter: 'R', guessed: false},
        {letter: 'I', guessed: false},
        {letter: 'Z', guessed: true},
        {letter: 'O', guessed: false},
        {letter: 'N', guessed: true},
        {letter: 'S', guessed: false}
    ],
    guessedLetters: []
};

const wordLettersReducer = (state = initialState.wordLetters, action) => {
    switch(action.type) {
        case types.GOOD_GUESS:
            const copy = state.slice();
            copy.forEach((word) => {
                if (word.letter === action.letter) {
                    word.guessed = true;
                }
            });
            return copy;
        case types.NEW_WORD:
            const newWords = action.letter.split('');
            newWords.map((word) => (
                {letter: word, guessed: false}
            ));
            return newWords;
        default:
            return state;
    }
};

export default wordLettersReducer;
