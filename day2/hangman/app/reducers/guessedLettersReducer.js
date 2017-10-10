// import * as types from '../actions/types';

const guessedLettersReducer = function guessedLettersReducer(state = [], action) {
  switch (action.type) {
    case 'BAD_GUESS':
    case 'GOOD_GUESS':
      return state.concat(action.letter);
    case 'NEW_WORD':
      return [];
    default:
      return state;
  }
};

export default guessedLettersReducer;
