/* Reducer for the badGuesses substate */
/* This reducer's state will be a simple integer */

// import * as types from '../actions/types';

function badGuessesReducer(state = 0, action) {
    switch (action.type) {
        case 'BAD_GUESS':
            return state + 1; // state++ is a no-no; do NOT modify previous state
        default:
            return state;
    }
}


export default badGuessesReducer;
