import * as types from '../actions/types';

const init = {
  word: 0,
  char: 0,
};

const currPosReducer = (state = null, action) => {
  switch(action.type) {
    case types.START_GAME: {
      return init;
    }
    case types.NEW_CHAR: {
      return Object.assign({}, state, {char: state.char + 1});
    }
    case types.NEXT_WORD: {
      return Object.assign({}, {
        word: state.word + 1,
        char: 0,
      });
    }
    default: {
      return state;
    }
  }
};

export default currPosReducer;
