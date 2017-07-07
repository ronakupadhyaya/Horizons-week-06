// import * as types from '../actions/types';

const guessedLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
        case 'BAD_GUESS':
            return state.concat(action.letter);
        case 'NEW_WORD':
            return [];
        default:
            return state;
    }
};

export default guessedLettersReducer;
