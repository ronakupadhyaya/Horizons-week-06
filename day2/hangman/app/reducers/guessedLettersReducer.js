const guessedLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
        case 'BAD_GUESS':
            return state.concat(action.letter);
        case 'START':
            return [];
        default:
            return state;
    }
};

export default guessedLettersReducer;
