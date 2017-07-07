/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';
// action.letter
const wordLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_GAME':
            const word = [];
            action.word.split('').forEach(item => word.push({letter: item, guessed: false}));
            return word;
        case 'GOOD_GUESS':
            const newState = [...state];
            newState.forEach((item) => {
                if (item.letter === action.letter) {
                    item.guessed = true;
                }
            });
            return newState;
        default:
            return state;
    }
};

export default wordLettersReducer;
