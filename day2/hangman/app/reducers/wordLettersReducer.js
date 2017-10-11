/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';
const arr = [
    {letter: 'H', guessed: true},
    {letter: 'O', guessed: false},
    {letter: 'R', guessed: false},
    {letter: 'I', guessed: false},
    {letter: 'Z', guessed: true},
    {letter: 'O', guessed: false},
    {letter: 'N', guessed: true},
    {letter: 'S', guessed: false}
];

const wordLettersReducer = (state = arr, action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
            const newState = state.slice();
            for(let i = 0; i < state.length; i++) {
                if(state[i].letter === action.letter) {
                    const newObj = Object.assign({}, state[i], {guessed: true});
                    newState[i] = newObj;
                }
            }
            return newState;
        default:
            return state;
    }
};

export default wordLettersReducer;
