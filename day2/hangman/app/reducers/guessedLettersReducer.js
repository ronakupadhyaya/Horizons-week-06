const guessedLettersReducer = (state = [], action) => {
    switch(action.type) {
        case 'BAD_GUESS':
        case 'GOOD_GUESS':
            const copy = [ ...state];
            copy.push(action.letter);
            return copy;
        default:
            return state;
    }
};

export default guessedLettersReducer;
