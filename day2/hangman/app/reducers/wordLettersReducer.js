/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';
const initialState = [
    {letter: 'H', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'R', guessed: false},
    {letter: 'I', guessed: false},
    {letter: 'Z', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'N', guessed: false},
    {letter: 'S', guessed: false}
];

const wordLettersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START':
            return initialState;
        case 'GOOD_GUESS':
            const arrCopy = state.map(a => Object.assign({}, a));
            for (let i = 0; i < arrCopy.length; i++) {
                if (arrCopy[i].letter === action.letter.toUpperCase()) {
                    arrCopy[i].guessed = true;
                }
            }
            return arrCopy;
        default:
            return state;
    }
};

export default wordLettersReducer;
