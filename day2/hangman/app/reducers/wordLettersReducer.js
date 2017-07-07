/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
            const newState = [...state];
            newState.forEach((letterObj) => {
                if (letterObj.letter === action.letter) {
                    letterObj.guessed = true;
                }
            });
            return newState;
        case 'NEW_GAME':
            return action.word
                .split('')
                .map((letter) => {
                    return {
                        letter: letter,
                        guessed: false
                    };
                });
        default:
            return state;
    }
};

export default wordLettersReducer;
