const guessedLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'BAD_GUESS':
            return state.concat(action.letter);
        default:
            return state;
    }
};

export default guessedLettersReducer;
