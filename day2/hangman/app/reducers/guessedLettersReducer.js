import * as types from '../actions/types';

const guessedLettersReducer = (state = [], action) => {
    switch(action.type) {
        case types.GOOD_GUESS:
        case types.BAD_GUESS:
            const copy = [...state];
            copy.push(action.letter);
            return copy;
        default:
            return state;
    }
};

export default guessedLettersReducer;
