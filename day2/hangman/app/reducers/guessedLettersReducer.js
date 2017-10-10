// this reducer will return an array of letters guessed

const guessedLettersReducer = (state = [], action) => {
    const stateCopy = state.slice();
    switch(action.type) {
        case 'BAD_GUESS':
        case 'GOOD_GUESS':
            stateCopy.push(action.letter);
            return stateCopy;
        default:
            return state;
    }
};

export default guessedLettersReducer;
