/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_GAME':
            return action.word.split('').map(w => ({letter: w, guessed: false}));
        case 'GOOD_GUESS':
            return state.map(n => {
                return n.letter === action.letter ? Object.assign({}, n, { guessed: true }) : n;
            });
        default:
            return state;
    }
};

export default wordLettersReducer;
