
const guessedLettersReducer = (state = 0, action) => {
    switch(action.type) {
        case 'BAD_GUESS':
        case 'GOOD_GUESS':
            const newState = [...state];
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].letter === action.letter) {
                    const newObj = Object.assign({}, newState[i]);
                    newObj.guessed = true;
                    newState[i] = newObj;
                }
            }
        default:
            return state;
    }
};

export default guessedLettersReducer;
