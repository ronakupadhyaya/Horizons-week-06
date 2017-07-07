/* Reducer for the badGuesses substate */
/* This reducer's state will be a simple integer */

import * as types from '../actions/types';

const badGuessesReducer = (state = 0, action) => {
    switch(action.type) {
        case types.BAD_GUESS:
            if (action.guessedLetters.indexOf(action.letter.toUpperCase()) === -1 ) {
                return state + 1;
            }
            return state;
        case types.SUBMIT_NEW_WORD:
            return 0;
        default:
            return state;
    }
};

export default badGuessesReducer;
