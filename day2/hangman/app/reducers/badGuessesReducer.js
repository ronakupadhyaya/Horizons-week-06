/* Reducer for the badGuesses substate */
/* This reducer's state will be a simple integer */

// import * as types from '../actions/types';

const badGuessesReducer = (state = 0, action) => {
    switch(action.type) {
        case 'BAD_GUESS':
            const newState = state + 1;
            return newState;
        case 'RESET':
            const diffState = 0;
            return diffState;
        default:
            return state;
    }
};

export default badGuessesReducer;
