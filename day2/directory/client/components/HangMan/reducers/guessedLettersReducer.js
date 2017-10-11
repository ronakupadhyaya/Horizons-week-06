
const guessedLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
        case 'BAD_GUESS':
            const newState = [...state];
            if(newState.indexOf(action.letter) === -1) {
                newState.push(action.letter);
            }
            return newState;
        default:
            return state;
    }
};

export default guessedLettersReducer;
