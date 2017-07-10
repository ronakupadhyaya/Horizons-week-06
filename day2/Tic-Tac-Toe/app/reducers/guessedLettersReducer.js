const wordLettersReducer = (state = [], action) => {
    switch(action.type) {
        case 'GOOD_GUESS':
            const copyState = [...state];
            copyState.push(action.letter);
            return copyState;
        case 'BAD_GUESS':
            const copState = [...state];
            copState.push(action.letter);
            return copState;
        default:
            return state;
    }
};

export default wordLettersReducer;
