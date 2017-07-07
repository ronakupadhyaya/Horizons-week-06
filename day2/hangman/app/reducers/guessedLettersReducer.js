/* Reducer for the badGuesses substate */
/* This reducer's state will be a simple integer */

import * as types from '../actions/types';

const initialState = [];

const guessedLettersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.BAD_GUESS:
            const newState = [...state];
            newState.push(action.letter);
            return newState;
        case types.GOOD_GUESS:
            const newState2 = [...state];
            newState2.push(action.letter);
            return newState2;
        default:
            return state;
    }
};

export default guessedLettersReducer;
