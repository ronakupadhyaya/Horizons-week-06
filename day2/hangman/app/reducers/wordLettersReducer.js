/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordLettersReducer = (state = [
    {letter: 'H', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'R', guessed: false},
    {letter: 'I', guessed: false},
    {letter: 'Z', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'N', guessed: false},
    {letter: 'S', guessed: false}
], action) => {
    const stateCopy = state.slice();
    switch(action.type) {
        case 'GOOD_GUESS':
            stateCopy.map((obj) => {
                if(obj.letter === action.letter) {
                    obj.guessed = true;
                }
                return obj;
            });
            return stateCopy;
        default:
            return state;
    }
};

export default wordLettersReducer;
