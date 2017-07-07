const guessedLettersReducer = (state = [], action) => {
    switch(action.type) {
        case 'BAD_GUESS':
        case 'GOOD_GUESS':
            const currState = [...state];
            currState.push(action.letter);
            return currState;
        default:
            return state;
    }
};


export default guessedLettersReducer;
