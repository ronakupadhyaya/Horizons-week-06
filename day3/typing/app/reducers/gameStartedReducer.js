import * as types from '../actions/types';

const gameStartedReducer = (state = false, action) => {
  switch(action.type) {
    case types.START_GAME: {
      return true;
    }
    case types.END_GAME: {
      return false;
    }
    default: {
      return state;
    }
  }
};

export default gameStartedReducer;
