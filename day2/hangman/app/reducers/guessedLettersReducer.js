import * as types from '../actions/types';

const guessedLettersReducer = (state = [], action) => {
    switch(action.type) {
        case types.BAD_GUESS:
        case types.GOOD_GUESS:
            return state.concat(action.letter);
        default:
            return state;
    }
};

export default guessedLettersReducer;
