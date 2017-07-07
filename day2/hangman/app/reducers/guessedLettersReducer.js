const guessedLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
        case 'BAD_GUESS':
            const newState = [ ...state ];
            const newLetter = action.letter;
            newState.push(newLetter);
            return newState;
        default:
            return state;
    }
};

export default guessedLettersReducer;
