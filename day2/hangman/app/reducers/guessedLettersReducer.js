function guessedLettersReducer(state = [], action) {
    switch (action.type) {
        case 'BAD_GUESS':
        case 'GOOD_GUESS':
            return [...state, action.letter];
        default:
            return state;
    }
}

export default guessedLettersReducer;
