import * as types from '../actions/types';

const guessedLettersReducer = (state = [], action) => {
    switch(action.type) {
        case types.BAD_GUESS:
        case types.GOOD_GUESS:
            const newState = state.slice();
            const letter = action.letter.toUpperCase();
            if (state.indexOf(letter) === -1) {
                newState.push(letter);
            }
            return newState;
        default:
            return state;
    }
};

export default guessedLettersReducer;
