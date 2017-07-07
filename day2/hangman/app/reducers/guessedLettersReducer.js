const guessedLettersReducer = (state = [], action) => {
    const newState = [...state];
    switch (action.type) {
        case 'GOOD_GUESS':
        case 'BAD_GUESS':
            newState.push(action.letter);
            return newState;
        default:
            return state;
    }
};

export default guessedLettersReducer;
