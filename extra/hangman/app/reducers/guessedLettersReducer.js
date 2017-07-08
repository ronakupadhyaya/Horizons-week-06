const guessedLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'BAD_GUESS':
        case 'GOOD_GUESS':
            return state.includes(action.letter) ? state : state.concat(action.letter);
        default:
            return state;
    }
};
export default guessedLettersReducer;
