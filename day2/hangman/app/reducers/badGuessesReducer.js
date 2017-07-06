/* Reducer for the badGuesses substate */
/* This reducer's state will be a simple integer */

import * as types from '../actions/types';

const badGuessesReducer = (state = 0, action) => {
    switch(action.type) {
        case types.BAD_GUESS:
            return state + 1;
        default:
            return state;
    }
};

export default badGuessesReducer;
