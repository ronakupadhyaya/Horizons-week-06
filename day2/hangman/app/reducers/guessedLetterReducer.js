const guessedLetterReducer = (state = [], action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
        case 'BAD_GUESS':
            const guessedLetters = state.slice();
            // console.log('guessedLetters LOG', action.letter);
            guessedLetters.push(action.inputLetter);
            return guessedLetters;
        default:
            return state;
    }
};

export default guessedLetterReducer;
