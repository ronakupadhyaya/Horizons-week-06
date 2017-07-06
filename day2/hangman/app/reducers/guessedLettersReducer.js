const guessedLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'BAD_GUESS':
        case 'GOOD_GUESS':
            if(state.indexOf(action.letter) === -1) {
                return state.concat([action.letter]);
            }
            return state;
        default:
            return state;
    }
};

export default guessedLettersReducer;
