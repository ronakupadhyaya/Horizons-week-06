/* Reducer for the guessedLetters substate */
/* This reducer's state will be an array of letters */
/* action has type and guessed letter */

const guessedLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'BAD_GUESS':
            const newState = [...state];
            newState.push(action.letter);
            return newState;
        default:
            return state;
    }
};

export default guessedLettersReducer;
