/* Reducer for the badGuesses substate */
/* This reducer's state will be a simple integer */

import * as types from '../actions/types';

const initialState = 0;

const badGuessesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.BAD_GUESS:
            const updatedGuesses = state + 1;
            return updatedGuesses;
        default:
            return state;
    }
};

export default badGuessesReducer;
