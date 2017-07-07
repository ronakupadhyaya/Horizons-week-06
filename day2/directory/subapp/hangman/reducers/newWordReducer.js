import * as types from '../actions/types';

const newWordReducer = (state = '', action) => {
    switch(action.type) {
        case types.NEW_WORD:
            return action.word || 'hi';
        default:
            return state;
    }
};

export default newWordReducer;
