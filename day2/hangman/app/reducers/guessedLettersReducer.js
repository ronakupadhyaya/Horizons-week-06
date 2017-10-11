const guessedLettersReducer = (state = [], action) => {
    switch(action.type) {
        case 'GOOD_GUESS':
            const newState = state.concat(action.letter);
            return newState;
        case 'BAD_GUESS':
            const diffState = state.concat(action.letter);
            return diffState;
        case 'RESET':
            const resetState = [];
            return resetState;
        default:
            return state;
    }
};

export default guessedLettersReducer;
