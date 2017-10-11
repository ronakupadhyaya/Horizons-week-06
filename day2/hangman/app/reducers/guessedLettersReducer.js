
const guessedLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
        case 'BAD_GUESS':
            const lettersState = state.slice();
            lettersState.push(action.letter);
            return lettersState;
        default:
            return state;
    }
};

export default guessedLettersReducer;
