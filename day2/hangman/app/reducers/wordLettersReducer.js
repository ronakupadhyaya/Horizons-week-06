/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

import * as types from '../actions/types';

const wordLetters = [
    {letter: 'h', guessed: false},
    {letter: 'o', guessed: false},
    {letter: 'r', guessed: false},
    {letter: 'i', guessed: false},
    {letter: 'z', guessed: false},
    {letter: 'o', guessed: false},
    {letter: 'n', guessed: false},
    {letter: 's', guessed: false}
];


const wordLettersReducer = (state = wordLetters, action) => {
    switch(action.type) {
        case types.GOOD_GUESS:
            const stateCopy = state.slice();
            for(let i = 0; i < stateCopy.length; i++) {
                if(action.letter === stateCopy[i].letter) {
                    stateCopy[i].guessed = true;
                }
            }
            return stateCopy;
        default:
            return state;
    }
};

export default wordLettersReducer;
