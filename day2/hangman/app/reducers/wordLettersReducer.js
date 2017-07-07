/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordLettersReducer = (state = [], action) => {
    switch(action.type) {
        case 'SECRET_WORD':
            const newState2 = [...state];
            const newState3 = newState2.concat(action.word);
            return newState3;
        case 'GOOD_GUESS':
            const newState = [...state];
            newState.forEach((object) => {
                if(object.letter === action.letter) {
                    object.guessed = true;
                }});
            return newState;
        default:
            return state;
    }
};

export default wordLettersReducer;
