const guessedLettersReducer = (state = [], action) => {
    switch(action.type) {
        case 'BAD_GUESS':
        case 'GOOD_GUESS':
            const newState = [...state];
            return [...newState, action.letter];
        default:
            return state;
    }
};

export default guessedLettersReducer;
