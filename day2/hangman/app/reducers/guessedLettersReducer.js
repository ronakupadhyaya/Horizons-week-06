const guessedLettersReducer = (state = '', action) => {
    switch(action.type) {
        case 'BAD_GUESS':
        case 'GOOD_GUESS':
            let newString = state;
            if(state.indexOf(action.letter) === -1) { // if letter hasn't been guessed
                newString += action.letter;
            }
            return newString;
        default:
            return state;
    }
};

export default guessedLettersReducer;
