/* Reducer for the badGuesses substate */
const badGuessesReducer = (state = 0, action) => {
    switch (action.type) {
        case 'BAD_GUESS':
            return state + 1;
        default:
            return state;
    }
};
/* This reducer's state will be a simple integer */

// import * as types from '../actions/types';

// const badGuessesReducer =

export default badGuessesReducer;
