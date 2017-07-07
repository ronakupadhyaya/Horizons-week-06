
const guessedLetters = (state = [], action) => {
    const arr = state.slice();
    switch(action.type) {
        case 'GOOD_GUESS':
        case 'BAD_GUESS':
            arr.push(action.letter.toUpperCase());
            return arr;
        default:
            return state;
    }
};

export default guessedLetters;
