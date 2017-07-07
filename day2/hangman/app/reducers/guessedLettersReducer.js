import * as types from '../actions/types';

const guessedLettersReducer = (state = [], action) => {
    switch(action.type) {
        case types.BAD_GUESS:
        case types.GOOD_GUESS:
            const copy = state.slice();
            copy.push(action.letter);
            return copy;
        default:
            return state;
    }
};

export default guessedLettersReducer;
