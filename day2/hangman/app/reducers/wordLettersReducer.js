/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordLettersReducer = (state = 0, action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
            const newState = [ ...state ];
            for (let i = 0; i < newState.length; i++) {
                if (action.i === newState[i].letter) {
                    newState[i].guessed = true;
                }
            }
            return newState;
        default:
            return state;
    }
};

export default wordLettersReducer;
