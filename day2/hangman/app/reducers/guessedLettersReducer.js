const guessedLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_GAME':
            return [];
        case 'BAD_GUESS':
        case 'GOOD_GUESS':
            return state.concat(action.letter);
        default:
            return state;

    }
};


export default guessedLettersReducer;
