const guessedLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
        case 'BAD_GUESS':
            const newState = [ ...state ];
            newState.push(action.letter);
            return newState;
        default:
            return state;
    }
};

export default guessedLettersReducer;
