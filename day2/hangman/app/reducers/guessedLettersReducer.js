import * as types from '../actions/types';
const guessedLettersReducer = (state = [], action) => {
    switch (action.type) {
        case types.BAD_GUESS :
        case types.GOOD_GUESS :
            const newState = [...state];
            newState.push(action.letter);
            return newState;
        default:
            return state;
    }
};

export default guessedLettersReducer;
