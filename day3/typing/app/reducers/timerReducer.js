// import * as types from '../actions/types';

const initialState = 3;

// console.log(initialState);

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_GAME':
            return state;
        case 'DECREMENT_TIMER':
            return state - 1;
        default:
            return state;
    }
};

export default timerReducer;
