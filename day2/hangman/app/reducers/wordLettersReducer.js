/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

import * as types from '../actions/types';

const initialState = [
  {letter: 'H', guessed: true},
  {letter: 'O', guessed: false},
  {letter: 'R', guessed: false},
  {letter: 'I', guessed: false},
  {letter: 'Z', guessed: true},
  {letter: 'O', guessed: false},
  {letter: 'N', guessed: true},
  {letter: 'S', guessed: false},
];

const wordLettersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GOOD_GUESS:
      return [...state]
        .map( (item) => (Object.assign(
          {},
          item,
          {guessed: item.letter.toLowerCase() === action.letter.toLowerCase() ? true : item.guessed}
        )) );
    case types.NEW_WORD:
      return action.word.split('').map( (item) => ({letter: item.toUpperCase(), guessed: false}) );
    default:
      return state;
  }
};

export default wordLettersReducer;
