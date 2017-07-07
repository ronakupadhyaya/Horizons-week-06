const guessedLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'BAD_GUESS':
            var newState = [...state];
            state.push(action.letter);
        default:
            return state;
    }
};

export default guessedLettersReducer;
