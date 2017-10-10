/*
    On any guess, we want to add the user's guest to an array,
    even if they have already guessed it - hmm... nice
*/

const guessedLettersReducer = (state = [], action) => {
    switch(action.type) {
        case 'GOOD_GUESS':
        case 'BAD_GUESS':
            return [...state, action.letter];
        default:
            return state;
    }
};

export default guessedLettersReducer;
