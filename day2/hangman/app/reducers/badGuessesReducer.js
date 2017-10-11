/* Reducer for the badGuesses substate */
/* This reducer's state will be a simple integer */

const badGuessesReducer = (state = 0, action) => {
    switch(action.type) {
        case 'BAD_GUESS':
            return state + 1;
        default:
            return state;
    }
};

export default badGuessesReducer;
