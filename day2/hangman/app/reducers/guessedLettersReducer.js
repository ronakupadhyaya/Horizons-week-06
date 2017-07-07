

const guessedLettersReducer = (state = [], action) => {
    switch(action.type) {
        case 'GOOD_GUESS':
        case 'BAD_GUESS':
            const newState2 = [...state];
            newState2.push(action.letter);
            return newState2;
        default:
            return state;
    }
};

export default guessedLettersReducer;
