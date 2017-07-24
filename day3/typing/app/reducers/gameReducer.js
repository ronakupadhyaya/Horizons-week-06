import dictionary from '../dictionary';
import _ from 'underscore';

import * as types from '../actions/types';

const initialState = {
    wordList: _.shuffle(dictionary).slice(0, 50),
    timer: 15,
    isGameStarted: false,
};

const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.START_GAME:
            return Object.assign({}, state, { isGameStarted: true });
        case types.END_GAME:
            return Object.assign({}, initialState);
        case types.DECREMENT_TIMER:
            return Object.assign({}, state, { timer: state.timer - 1 });
        default:
            return state;
    }
};

export default gameReducer;
