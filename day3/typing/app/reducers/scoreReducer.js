import * as types from '../actions/types';

const scoreReducer = (state = 0, action) => {
    switch (action.type) {
        case types.actionStartGame:
            return 0;
        case types.actionAppendLetter:
            return state + (action.correct ? 1 : -1);
        default:
            return state;
    }
};

export default scoreReducer;
