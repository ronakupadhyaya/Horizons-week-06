const guessedLettersReducer = (state = [], action) => {
<<<<<<< HEAD
    switch (action.type) {
        case 'GOOD_GUESS':
            const newerState = [ ...state ];
            newerState.push(action.letter);
            return newerState;
        case 'BAD_GUESS':
            const newerState2 = [ ...state ];
            newerState2.push(action.letter);
            return newerState2;
=======
    switch(action.type) {
        case 'GOOD_GUESS':
        case 'BAD_GUESS':
            return [...state, action.letter];
        case 'CREATE':
            return [];
>>>>>>> origin/obadiar
        default:
            return state;
    }
};

export default guessedLettersReducer;
