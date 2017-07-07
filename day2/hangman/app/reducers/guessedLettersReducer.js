const guessedLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'BAD_GUESS':
        case 'GOOD_GUESS':
            const newState = state.concat(action.letter);
            return newState;
        case 'CHANGE_WORD':
            return [];
        default:
            return state;
    }
};

export default guessedLettersReducer;
