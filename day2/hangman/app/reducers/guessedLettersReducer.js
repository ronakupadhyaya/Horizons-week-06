const guessedLettersReducer = (state = [], action) => {
    switch(action.type) {
        case 'GOOD_GUESS':
        case 'BAD_GUESS':
            return state.includes(action.letter) ? state : [...state, action.letter];
        default:
            return state;
    }
};

export default guessedLettersReducer;
