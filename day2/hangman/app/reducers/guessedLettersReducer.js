const guessedLettersReducer = (state = [], action) => {
    switch(action.type) {
        case 'BAD_GUESS':
        case 'GOOD_GUESS':
            const temp = state;
            temp.push(action.letter);
            return temp;
        default:
            return state;
    }
};

export default guessedLettersReducer;
