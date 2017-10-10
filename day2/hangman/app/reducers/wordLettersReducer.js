/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

import * as types from '../actions/types';

const initialState = [
  {letter: 'H', guessed: false},
  {letter: 'O', guessed: false},
  {letter: 'R', guessed: false},
  {letter: 'I', guessed: false},
  {letter: 'Z', guessed: false},
  {letter: 'O', guessed: false},
  {letter: 'N', guessed: false},
  {letter: 'S', guessed: false}
];

const wordLettersReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GOOD_GUESS:
            const copy = [...state];
            for (let i = 0; i < copy.length; i++) {
                if (copy[i].letter === action.letter) {
                    copy[i].guessed = true;
                }
            }
            return copy;
        default:
            return state;
    }
};

export default wordLettersReducer;
