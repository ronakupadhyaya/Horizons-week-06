/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';
const initialWord = [
  {guessed: false, letter: 'b'},
  {guessed: false, letter: 'o'},
  {guessed: false, letter: 'n'},
  {guessed: false, letter: 'f'},
  {guessed: false, letter: 'i'},
  {guessed: false, letter: 'r'},
  {guessed: false, letter: 'e'},
];
const wordLettersReducer = function wordLettersReducer(state = initialWord, action) {
  switch (action.type) {
    case 'GOOD_GUESS':
      return state.map(letterObj => {
        if (letterObj.letter === action.letter) {
          return {letter: action.letter, guessed: true};
        }
        return letterObj;
      });
    default:
      return state;
  }
};

export default wordLettersReducer;
