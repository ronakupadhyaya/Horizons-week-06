/* Reducer for the badGuesses substate */
/* This reducer's state will be a simple integer */

const badGuessesReducer = (state = 0, action) => {
    switch(action.type) {
        case 'NEW_GAME':
            return 0;
        case 'BAD_GUESS':
            const newNum = state + 1;
            return newNum;
        default:
            return state;
    }
};

export default badGuessesReducer;
