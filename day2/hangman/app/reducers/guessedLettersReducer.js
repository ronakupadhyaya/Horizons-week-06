import * as types from '../actions/types';

const guessedLettersReducer = (state = [], action) => {
    switch (action.type) {
        case types.BAD_GUESS:
        case types.GOOD_GUESS:
        default:
            return [...state, action.letter];
    }
};

export default guessedLettersReducer;
