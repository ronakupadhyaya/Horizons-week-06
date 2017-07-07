const guessedLettersReducer = (state = [], action) => {
    const copy = state.slice();
    if (copy.indexOf(action.letter) === -1 ) {
        copy.push(action.letter);
    }
    switch (action.type) {
        case 'GOOD_GUESS':
            return copy;

        case 'BAD_GUESS':
            return copy;

        default:
            return state;
    }
};

export default guessedLettersReducer;
