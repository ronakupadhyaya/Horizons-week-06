/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const defState = [
    {letter: 'h', guessed: false},
    {letter: 'o', guessed: false},
    {letter: 'r', guessed: false},
    {letter: 'i', guessed: false},
    {letter: 'z', guessed: false},
    {letter: 'o', guessed: false},
    {letter: 'n', guessed: false},
    {letter: 's', guessed: false}
];

const wordLettersReducer = (state = defState, action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
            const newState = [...state];
            newState.forEach((ele) => {
                if (action.letter === ele.letter) {
                    ele.guessed = true;
                }
            });
            return newState;
        default:
            return state;
    }
};

export default wordLettersReducer;
