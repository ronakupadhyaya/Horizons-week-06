/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordLettersReducer = (state = [
    {letter: 'H', guessed: true},
    {letter: 'O', guessed: false},
    {letter: 'R', guessed: false},
    {letter: 'I', guessed: false},
    {letter: 'Z', guessed: true},
    {letter: 'O', guessed: false},
    {letter: 'N', guessed: true},
    {letter: 'S', guessed: false}
], action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
            const newerState = [ ...state ];
            for(let i = 0; i < newerState.length; i++) {
                if(newerState[i].letter === action.letter) {
                    const star = Object.assign({}, newerState[i]);
                    star.guessed = true;
                    newerState[i] = star;
                }
            }
            return newerState;
        default:
            return state;
    }
};

export default wordLettersReducer;
