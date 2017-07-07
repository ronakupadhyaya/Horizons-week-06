
const guessedLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'BAD_GUESS':
        case 'GOOD_GUESS':
            const newState = state.slice();
            newState.push(action.letter);
            return newState;
        case 'NEW_GAME':
            const newGameState = [];
            return newGameState;
        default:
            return state;
    }
};

export default guessedLettersReducer;
