const wordLettersReducer = (state = [], action) => {
    switch(action.type) {
        case 'GOOD_GUESS':
            const copyState = [...state];
            copyState.push(action.letter);
            return copyState;
        case 'BAD_GUESS':
            const badGuessState = [...state];
            badGuessState.push(action.letter);
            return badGuessState;
        default:
            return state;
    }
};

export default wordLettersReducer;
