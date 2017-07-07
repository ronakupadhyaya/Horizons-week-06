const guessedLettersReducer = function(state = [], action) {
    const newState = state.slice();
    const newGuess = {letter: action.letter};
    switch(action.type) {
        case 'GOOD_GUESS':
            newGuess.correct = true;
            newState.push(newGuess);
            return newState;
        case 'BAD_GUESS':
            newGuess.correct = false;
            newState.push(newGuess);
            return newState;
        case 'NEW_GAME':
            return [];
        default:
            return state;
    }
};

export default guessedLettersReducer;
