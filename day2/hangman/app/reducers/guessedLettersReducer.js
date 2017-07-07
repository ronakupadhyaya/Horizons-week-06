import { GOOD_GUESS, BAD_GUESS, NEW_GAME } from '../actions/types';

const guessedLettersReducer = (state = [], action) => {
    switch(action.type) {
        case GOOD_GUESS:
        case BAD_GUESS:
            const guessedAlready = state.some((guessedLetter) => (guessedLetter === action.inputLetter));
            return guessedAlready ?
                state :
                state.concat([action.inputLetter]);
        case NEW_GAME:
            return [];
        default:
            return state;
    }
};

export default guessedLettersReducer;
