/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const initWord = [
    {letter: 'H', guessed: true},
    {letter: 'O', guessed: false},
    {letter: 'R', guessed: false},
    {letter: 'I', guessed: false},
    {letter: 'Z', guessed: true},
    {letter: 'O', guessed: false},
    {letter: 'N', guessed: true},
    {letter: 'S', guessed: false}
];


const wordLettersReducer = (state = initWord, action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
            const newState1 = state.slice();
            for (let i = 0; i < newState1.length; i++) {
                if(newState1[i].letter === action.letter) {
                    newState1[i].guessed = true;
                }
            }
            return newState1;
        case 'INPUT_WORD':
            return action.word.split('').map(l=>({letter: l, guessed: false}));
        default:
            return state;
    }
};

export default wordLettersReducer;
