const guessedLettersReducer = (state = [], action) => {
    const copy = state.slice();
    switch(action.type) {
        case 'BAD_GUESS':
        case 'GOOD_GUESS':
            copy.push(action.letter);
            return copy;
        default:
            return state;
    }
};

export default guessedLettersReducer;
