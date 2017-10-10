import * as types from '../actions/types';

const initialState = [];

const guessedLetterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BAD_GUESS:
    case types.GOOD_GUESS:
      return state.concat([action.letter.toUpperCase()]);
    case types.NEW_WORD:
      return [];
    default:
      return state;
  }
};

export default guessedLetterReducer;
