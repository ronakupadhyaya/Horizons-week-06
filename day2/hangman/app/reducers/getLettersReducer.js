/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const initialState = [];

const getLettersReducer = function getLettersReducer(state = initialState, action) {
  switch (action.type) {
    case 'GOOD_GUESS':
    case 'BAD_GUESS':
      return state.concat(action.letter);
    case 'NEW_WORD':
      return [];
    default:
      return state;
  }
};

export default getLettersReducer;
