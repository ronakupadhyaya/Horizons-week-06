const badGuessesReducer = (state = 0, action) => {
    switch(action.type) {
        case'BAD_GUESS':
            return state + 1;
        default:
            return state;
    }
};

export default badGuessesReducer;
