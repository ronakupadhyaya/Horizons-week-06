const guessedLetterReducer = (state = [], action) => {
    const newState = [...state];
    switch(action.type) {
        case 'NEW_GAME':
            newState = [];
            return newState;
        case 'BAD_GUESS':
            newState.push(action.letter);
            return newState;
        case 'GOOD_GUESS':
            newState.push(action.letter);
            return newState;
        default:
            return state;
    }
};

export default guessedLetterReducer;
