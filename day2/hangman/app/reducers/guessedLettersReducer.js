const guessedLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'BAD_GUESS':
        case 'GOOD_GUESS':
            return [...state, action.letter];
        case 'INPUT_WORD':
            return [];
        default:
            return state;
    }
};

export default guessedLettersReducer;
