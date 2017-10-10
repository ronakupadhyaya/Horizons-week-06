const guessedLettersReducer = (state = [], action) => {
    switch(action.type) {
        case 'GOOD_GUESS':
        case 'BAD_GUESS':
            return [...state, action.letter];
        case 'CREATE':
            return [];
        default:
            return state;
    }
};

export default guessedLettersReducer;
