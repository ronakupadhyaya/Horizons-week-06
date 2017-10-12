import * as types from '../actions/types';

const inputReducer = (state = '', action) => {
    switch (action.type) {
        case types.actionStartGame:
        case types.actionSkip:
            return '';
        case types.actionAppendLetter:
            return state + action.letter;
        default:
            return state;
    }
};

export default inputReducer;
