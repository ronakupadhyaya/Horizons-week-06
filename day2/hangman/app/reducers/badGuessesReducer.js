/* Reducer for the badGuesses substate */
/* This reducer's state will be a simple integer */

import * as types from '../actions/types';


const badGuessesReducer = (state = 0, action) => {
    switch (action.type) {
        // Missing cases
        case types.BAD_GUESS:
            const newState = state + 1; // so doesn't change old state
            return newState;

        default:
            return state;
    }
};

export default badGuessesReducer;
