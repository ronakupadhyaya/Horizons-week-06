/* Reducer for the badGuesses substate */
/* This reducer's state will be a simple integer */

import * as types from '../actions/types';

const initialState = 0;

const badGuessesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BAD_GUESS:
      return state + 1;
    case types.NEW_WORD:
      return 0;
    default:
      return state;
  }
};

export default badGuessesReducer;
