const guessedLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'BAD_GUESS':
        case 'GOOD_GUESS':
            const stateArr = state.slice();
            stateArr.push(action.letter.toUpperCase());
            return stateArr;
        default:
            return state;
    }
};

export default guessedLettersReducer;
