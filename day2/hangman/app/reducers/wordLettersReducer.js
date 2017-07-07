/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */
// you want to make sure the new state has the guessed field set to true
// for each of the letter objects with letter: "O".
// Your initial state can be any hardcoded word you want, just be sure all the
// guessed fields start as false.
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
    switch (action.type) {
        case 'GOOD_GUESS':
            const newState = [...state];
            newState.forEach((x) => {
                if (x.letter === action.letter) {
                    x.guessed = true;
                }
            });
            return newState;
        default:
            return state;
    }
};
// import * as types from '../actions/types';


export default wordLettersReducer;
