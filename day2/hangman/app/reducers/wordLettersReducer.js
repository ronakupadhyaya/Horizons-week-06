/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

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

const wordLettersReducer = function badGuessesReducer(state = initialState, action) {
  switch (action.type) {
    case 'GOOD_GUESS':
      return state.map((letterObj)=> {
        let guessed = letterObj.guessed;
        if(letterObj.letter === action.letter) {
          guessed = true;
        }
        return Object.assign({}, letterObj, {guessed});
      });
    default:
      return state;
  }
};

export default wordLettersReducer;
