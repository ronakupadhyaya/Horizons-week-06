/* Reducer for the badGuesses substate */
/* This reducer's state will be a simple integer */

// import * as types from '../actions/types';

// const badGuessesReducer =

// export default badGuessesReducer;

const badGuessesReducer = (state = 0, action) => {
    switch (action.type) {
        case 'BAD_GUESS':
            let newState = 0;
            newState = state + 1;
            return newState;
        default:
            return state;
    }
};

export default badGuessesReducer;
