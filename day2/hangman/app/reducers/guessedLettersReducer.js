const guessedLettersReducer = (state = [], action) => {
    switch(action.type) {
        case 'GOOD_GUESS':
        case 'BAD_GUESS':
            const newState = [...state];
            const newState1 = newState.concat([action.letter]);
            return newState1;
        default:
            return state;
    }
};

export default guessedLettersReducer;
