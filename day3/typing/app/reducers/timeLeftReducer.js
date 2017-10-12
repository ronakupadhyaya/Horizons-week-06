import * as types from '../actions/types';

const timeAvailable = 30;

const timeLeftReducer = (state = null, action) => {
  switch(action.type) {
    case types.START_GAME: {
      return timeAvailable;
    }
    case types.END_GAME: {
      return null;
    }
    case types.DECREMENT_TIMER: {
      return state - 1;
    }
    default: {
      return state;
    }
  }
};

export default timeLeftReducer;
