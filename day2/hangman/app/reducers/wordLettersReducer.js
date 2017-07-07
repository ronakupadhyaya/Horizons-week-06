/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';
const wordLettersReducer = (state = [{letter: 'A', guessed: false}, {letter: 'D', guessed: false}, {letter: 'A', guessed: false}, {letter: 'M', guessed: false}], action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
            const newState = [ ...state ];
            newState.forEach(function(ltr) {
                if (ltr.letter === action.letter) {
                    ltr.guessed = true;
                }
            });
            return newState;
        default:
            return state;
    }
};

export default wordLettersReducer;


// state = [{letter: 'A', guessed = false}, {letter: 'D', guessed = false}, {letter: 'A', guessed = false}, {letter: 'M', guessed = false}]
