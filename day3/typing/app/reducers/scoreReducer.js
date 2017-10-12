import * as types from '../actions/types';

const init = 0;

const scoreReducer = (state = null, action) => {
  switch(action.type) {
    case types.START_GAME: {
      return init;
    }
    case types.NEW_CHAR: {
      const currPos = action.currPos;
      const words = action.words;
      if(currPos.char > words[currPos.word].length - 1) {
        return state - 1;
      } else if(words[currPos.word][currPos.char].letter === action.char) {
        return state + 1;
      }
      return state - 1;
    }
    case types.NEXT_WORD: {
      const difference = action.words[action.currPos.word].length - action.currPos.char;
      if(difference === 0) {
        return state;
      }
      return state - difference;
    }
    default: {
      return state;
    }
  }
};

export default scoreReducer;
