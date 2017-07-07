import * as types from '../actions/types';

const guessedLettersReducer = (state = [], action) => {
    switch(action.type) {
        case types.BAD_GUESS:
        case types.GOOD_GUESS:
            const stateCopy = state.slice();
            stateCopy.push(action.letter);
            return stateCopy;
        default:
            return state;
    }
};

export default guessedLettersReducer;
