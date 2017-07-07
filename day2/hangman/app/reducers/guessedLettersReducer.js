const guessedLettersReducer = (state = [], action) => {
    switch(action.type) {
        case 'BAD_GUESS':
        case 'GOOD_GUESS':
            const newState = [...state];
            newState.push(action.letter);
            return newState;
        case 'NEW_GAME': return [];
        default: return state;
    }
};

export default guessedLettersReducer;
