import * as types from '../actions/types';
const wordReducer = (state = '', action) => {
    switch (action.type) {
        case types.SET_WORD :
            const newState = action.word;
            return newState;
        default:
            return state;
    }
};

export default wordReducer;
