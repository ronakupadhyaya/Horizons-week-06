const guessedLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
        case 'BAD_GUESS':
            const newState = state.includes(action.letter.toUpperCase()) ? state : state.concat([action.letter.toUpperCase()]);
            return newState;
        default:
            return state;
    }
};

export default guessedLettersReducer;
