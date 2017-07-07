/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordLettersReducer = (state = [
  {letter: 'H', guessed: false},
  {letter: 'O', guessed: false},
  {letter: 'R', guessed: false},
  {letter: 'I', guessed: false},
  {letter: 'Z', guessed: false},
  {letter: 'O', guessed: false},
  {letter: 'N', guessed: false},
  {letter: 'S', guessed: false}
], action) => {
    const arr = state.slice();
    switch (action.type) {
        case 'NEW_WORD':
            const letters = action.word.toUpperCase().split('');
            return letters.map((i) => ({letter: i, guessed: false}));
        case 'GOOD_GUESS':
            arr.map((letter) => {
                letter.letter === action.letter.toUpperCase() ? letter.guessed = true : null;
            });
            return arr;
        default:
            return state;
    }
};

export default wordLettersReducer;
