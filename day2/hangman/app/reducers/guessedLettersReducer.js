/* Reducer for the badGuesses substate */
/* This reducer's state will be a simple integer */

// import * as types from '../actions/types';

const guessedLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
        case 'BAD_GUESS':
            let flag = false;
            const newState = state.map((item) => {
                if (item === action.letter) {
                    flag = true;
                    return item;
                }
                return item;
            });
            if (!flag) {
                newState.push(action.letter);
            }
            return newState;
        default:
            return state;
    }
};

export default guessedLettersReducer;
