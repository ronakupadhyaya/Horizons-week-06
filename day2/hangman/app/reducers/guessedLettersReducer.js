const guessedLettersReducer = (state = [], action) => {
    switch(action.type) {
        case 'BAD_GUESS':
        case 'GOOD_GUESS':
            const array = [...state, action.letter];
            return array;
        default:
            return state;
    }
};

export default guessedLettersReducer;
