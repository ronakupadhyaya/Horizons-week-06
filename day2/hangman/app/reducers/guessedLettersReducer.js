const guessedLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
            const newerState = [ ...state ];
            newerState.push(action.letter);
            return newerState;
        case 'BAD_GUESS':
            const newerState2 = [ ...state ];
            newerState2.push(action.letter);
            return newerState2;
        default:
            return state;
    }
};

export default guessedLettersReducer;
